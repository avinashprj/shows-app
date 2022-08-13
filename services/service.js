import axios from "axios";
export const getShows = async () => {
    try {
        const shows = await axios.get("https://api.tvmaze.com/shows");
        return shows.data;
    } catch (error) {
        console.log("Error is", error);
    }
};
export const getShowById = async (id) => {
    try {
        const shows = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        return shows.data;
    } catch (error) {
        console.log("Error is", error);
    }
};
export const getShowBySearch = async (text) => {
    try {
        const shows = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${text}`
        );
        return shows.data;
    } catch (error) {
        console.log("Error is", error);
    }
};
