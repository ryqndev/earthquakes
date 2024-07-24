import {
    ArcGISTiledElevationTerrainProvider,
    EllipsoidTerrainProvider,
} from "cesium";
import { memo, useEffect } from "react";
import { useCesium } from "resium";
import { useBooleanState } from "../../../../../controllers/useBooleanState";
import { Toggle } from "../../../../../components/Toggle/Toggle";

/** Use ArcGIS terrain for now. However, this provider has a ton of geometries and should try to use a lower res one. This will significantly affect performance */
const ARCGIS_TERRAIN = ArcGISTiledElevationTerrainProvider.fromUrl(
    "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
);
const DEFAULT_TERRAIN = new EllipsoidTerrainProvider();

export const TerrainToggle = memo(function TerrainToggle() {
    const { value: showTerrain, toggle } = useBooleanState(false);

    const { viewer } = useCesium();

    useEffect(() => {
        (async () => {
            if (!viewer) return;
            const terrain = await ARCGIS_TERRAIN;
            viewer.terrainProvider = showTerrain ? terrain : DEFAULT_TERRAIN;
        })();
    }, [showTerrain, viewer]);

    return (
        <Toggle id="terrain-toggle" value={showTerrain} onToggle={toggle}>
            Toggle Terrain
        </Toggle>
    );
});
