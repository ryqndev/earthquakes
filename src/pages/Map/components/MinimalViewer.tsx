import { ComponentProps, memo, useMemo } from "react";
import { Scene, Viewer } from "resium";
import { useMapTheme } from "../controllers/hooks/useMapTheme";
import { Color } from "cesium";

/**
 * Removes all of the extra UI chrome that comes with the base Cesium component
 */
export const MinimalViewer = memo(function MinimalViewer({
    children,
    ...props
}: Partial<ComponentProps<typeof Viewer>>) {
    const mapThemeProps = useMapTheme();
    const offWhite = useMemo(() => new Color(0.93, 0.93, 0.94), []);

    return (
        <Viewer
            terrainShadows={undefined}
            baseLayerPicker={false}
            homeButton={false}
            timeline={false}
            targetFrameRate={90}
            fullscreenButton={false}
            navigationHelpButton={false}
            geocoder={false}
            selectionIndicator={false}
            sceneModePicker={false}
            infoBox={false}
            animation={false}
            {...props}
            {...mapThemeProps}
        >
            <Scene backgroundColor={offWhite}>{children}</Scene>
        </Viewer>
    );
});
