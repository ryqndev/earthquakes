import { useCallback, useState } from "react";

export const useBooleanState = (defaultValue: boolean) => {
    const [state, setState] = useState(defaultValue);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    const setTrue = useCallback(() => {
        setState(true);
    }, []);

    const setFalse = useCallback(() => {
        setState(false);
    }, []);

    return {
        value: state,
        setTrue,
        setFalse,
        toggle,
    };
};
