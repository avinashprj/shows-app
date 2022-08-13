import * as React from "react";

export const useInput = (state) => {
    const [inputState, setInputState] = React.useState(state);
    const inputUpdate = (e) => {
        const inpValue = e.target.value;
        setInputState({
            ...inputState,
            [e.target.name]: inpValue,
        });
    };
    return { inputState, inputUpdate, setInputState };
};
