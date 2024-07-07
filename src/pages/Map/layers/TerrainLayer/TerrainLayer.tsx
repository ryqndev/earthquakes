import { ArcGISTiledElevationTerrainProvider, EllipsoidTerrainProvider } from "cesium";
import { memo, useCallback, useEffect, useState } from "react";
import { useCesium } from "resium";


/** Use ArcGIS terrain for now. However, this provider has a ton of geometries and should try to use a lower res one. This will significantly affect performance */
const ARCGIS_TERRAIN = await ArcGISTiledElevationTerrainProvider.fromUrl("https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer")
const DEFAULT_TERRAIN = new EllipsoidTerrainProvider();

export const TerrainLayer = memo(function TerrainLayer() {
    const [showTerrain, setShowTerrain] = useState(false);

    const { viewer } = useCesium();

    const toggleTerrain = useCallback(() => { setShowTerrain(p => !p) }, []);


    useEffect(() => {
        if (!viewer) return;
        viewer.terrainProvider = showTerrain ? ARCGIS_TERRAIN : DEFAULT_TERRAIN;
    }, [showTerrain, viewer]);


    return <button style={{ zIndex: 100, position: 'fixed', top: 20, left: 20 }} onClick={toggleTerrain}>toggle</button>

})