import React from "react";
import { useInput } from "../hooks/useInput";

const SearchContext = React.createContext();

const SearchContextProvider = ({ children }) => {
    const [searchResults, setSearchResults] = React.useState([]);
    const {
        inputState: { searchText },
        inputUpdate,
        setInputState,
    } = useInput({
        searchText: "",
    });

    const value = React.useMemo(
        () => ({
            searchText,
            inputUpdate,
            setInputState,
            searchResults,
            setSearchResults,
        }),
        [searchText, inputUpdate, setInputState]
    );

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearchContext = () => {
    const context = React.useContext(SearchContext);
    if (context === undefined) {
        throw new Error(
            "useSearchContext must be use in a SearchContextProvider component"
        );
    }
    return context;
};

export { useSearchContext, SearchContextProvider };
