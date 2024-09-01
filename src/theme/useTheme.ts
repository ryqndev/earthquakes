import { useCallback, useEffect, useMemo, useState } from "react";
import { Theme } from "./types";
import { getCurrentTheme, setCurrentTheme } from "./theme";

export const THEMES: Theme[] = [Theme.LIGHT, Theme.DARK];

export const useTheme = () => {
    const [themeIndex, setThemeIndex] = useState(
        THEMES.indexOf(getCurrentTheme())
    );

    const theme = useMemo(() => THEMES[themeIndex], [themeIndex]);

    const toggle = useCallback(() => {
        setThemeIndex((p) => (p + 1) % THEMES.length);
    }, [themeIndex]);

    useEffect(() => {
        document.documentElement.setAttribute("theme", THEMES[themeIndex]);
        setCurrentTheme(THEMES[themeIndex]);
    }, [theme]);

    return {
        theme,
        toggle,
    };
};
