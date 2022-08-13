import * as React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled.search";
import SearchIcon from "@mui/icons-material/Search";
import { useInput } from "../../hooks/useInput";
import { getShowBySearch } from "../../services/service";
import { useSearchContext } from "../../context/searchContext";
export default function SearchBar({ setShows, data }) {
    const { searchText, inputUpdate } = useSearchContext();
    const timerId = React.useRef(null);
    React.useEffect(() => {
        clearTimeout(timerId.current);
        timerId.current = setTimeout(async () => {
            if (searchText) {
                const searchResults = [];
                console.log(searchResults);
                setShows(searchResults);
            }
        }, 200);

        return () => clearTimeout(timerId.current);
    }, [searchText]);

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                value={searchText}
                onChange={inputUpdate}
                placeholder="Search…"
                inputProps={{ "aria-label": "search", name: "searchText" }}
            />
        </Search>
    );
}