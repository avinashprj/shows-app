import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        // Define custom breakpoint values.
        // These will apply to Material-UI components that use responsive
        // breakpoints, such as `Grid` and `Hidden`. You can also use the
        // theme breakpoint functions `up`, `down`, and `between` to create
        // media queries for these breakpoints
        values: {
            xs: 0,
            sm: 400,
            md: 600,
            lg: 1000,
            xl: 1200,
            xxl: 1400,
        },
    },
});
