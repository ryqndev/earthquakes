import {
    ArcGISTiledElevationTerrainProvider,
    EllipsoidTerrainProvider,
} from "cesium";
import { memo, useEffect } from "react";
import { useCesium } from "resium";
import { Toggle } from "../../../../../components/Toggle/Toggle";
import { useMapSettingsStore } from "../../../controllers/settings/useMapSettingsStore";

/** Use ArcGIS terrain for now. However, this provider has a ton of geometries and should try to use a lower res one. This will significantly affect performance */
const ARCGIS_TERRAIN = ArcGISTiledElevationTerrainProvider.fromUrl(
    "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
);
const DEFAULT_TERRAIN = new EllipsoidTerrainProvider();

export const TerrainToggle = memo(function TerrainToggle() {
    const { showTerrain, toggleShowTerrain } = useMapSettingsStore(
        ({ showTerrain, toggleShowTerrain }) => ({
            showTerrain,
            toggleShowTerrain,
        })
    );

    const { viewer } = useCesium();

    useEffect(() => {
        (async () => {
            if (!viewer) return;
            const terrain = await ARCGIS_TERRAIN;
            // todo @ryan: don't make rerender with new default terrain when settings opened up
            viewer.terrainProvider = showTerrain ? terrain : DEFAULT_TERRAIN;
        })();
    }, [showTerrain, viewer]);

    return (
        <Toggle
            id="terrain-toggle"
            value={showTerrain}
            onToggle={toggleShowTerrain}
        >
            Toggle Terrain
        </Toggle>
    );
});
