import { useMemo } from "react";
import { Theme } from "../../../../theme/types";
import { useTheme } from "../../../../theme/useTheme";
import {
    darkMinimalTilesImageryLayer,
    lightMinimalTilesImageryLayer,
} from "../tiles";

interface MapThemeProps {
    baseLayer: any;
    skyBox: false | undefined;
}

/**
 * hook to handle all themeing that relates to the cesium map
 * object. does not handle the entities/tooltips that are
 * a part of the map - just the map object itself
 */
export const useMapTheme = (): MapThemeProps => {
    const { theme } = useTheme();

    const baseLayer = useMemo(
        () =>
            theme === Theme.LIGHT
                ? lightMinimalTilesImageryLayer
                : darkMinimalTilesImageryLayer,
        [theme]
    );
    const skyBox = useMemo(
        () => (theme === Theme.DARK ? undefined : false),
        []
    );

    return { baseLayer, skyBox };
};
