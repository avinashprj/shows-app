import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VideosGrid from "../components/ShowsGrid/ShowsGrid";
import { getShows } from "../services/service";
import { theme } from "../Theme/theme";
import SearchBar from "../components/Search/Search";
import { SearchContextProvider } from "../context/SearchContext";

export default function Home({ data }) {
    const [shows, setShows] = React.useState(() => JSON.parse(data));

    return (
        <ThemeProvider theme={theme}>
            <SearchContextProvider>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", sm: "block" },
                                }}
                            >
                                TV SHOWS
                            </Typography>
                            <SearchBar data={data} setShows={setShows} />
                        </Toolbar>
                    </AppBar>
                    <VideosGrid data={shows} setShows={setShows} />
                </Box>
            </SearchContextProvider>
        </ThemeProvider>
    );
}

export async function getStaticProps() {
    const res = await getShows();
    const data = res.slice(0, 100);
    return {
        props: {
            data: JSON.stringify(data),
        },
    };
}
