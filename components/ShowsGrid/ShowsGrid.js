import * as React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../ShowCard/ShowCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchContext } from "../../Context/SearchContext";
import { getShowBySearch } from "../../services/service";

export default function ShowsGrid({ data }) {
    const [index, setIndex] = React.useState(50);
    const [movies, setMovies] = React.useState(data.slice(0, index));
    const [isMore, setIsMore] = React.useState(true);
    const { searchText, inputUpdate, setSearchResults, searchResults } =
        useSearchContext();

    const fetchMoreData = () => {
        if (movies.length >= 100) {
            setIsMore(false);
            return;
        }

        setTimeout(() => {
            setIndex((prev) => prev + 30);
            setMovies((prevItem) =>
                prevItem.concat(data.slice(index, index + 30))
            );
        }, 500);
    };
    React.useEffect(() => {
        (async () => {
            if (searchText) {
                try {
                    const resp = await getShowBySearch(searchText);
                    setSearchResults(resp);
                } catch (e) {
                    console.error("Error in fetching Products", e);
                }
            }
        })();
    }, [searchText]);

    if (searchText) {
        return (
            <Grid
                sx={{
                    padding: "1rem",
                }}
                container
                spacing={{ xs: 2, md: 3 }}
            >
                {searchResults.map((singleShow, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2.4}
                        xxl={2}
                        key={index}
                    >
                        <MovieCard show={singleShow.show} />
                    </Grid>
                ))}
            </Grid>
        );
    }
    if (!searchText) {
        return (
            <InfiniteScroll
                dataLength={movies.length}
                next={fetchMoreData}
                hasMore={isMore}
                loader={<h2 style={{ textAlign: "center" }}>LOADING...</h2>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Grid
                    sx={{
                        padding: "1rem",
                    }}
                    container
                    spacing={{ xs: 2, md: 3 }}
                >
                    {movies.map((singleShow, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2.4}
                            xxl={2}
                            key={index}
                        >
                            <MovieCard show={singleShow} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        );
    }
}
