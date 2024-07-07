import cn from "./Map.module.scss";
import "./vendor.css";
import { memo, useCallback, useState } from "react";
import { MinimalViewer } from "./components/MinimalViewer";
import { EarthquakeLayer } from "./layers/EarthquakeLayer/EarthquakeLayer";
import { TerrainLayer } from "./layers/TerrainLayer/TerrainLayer";
import { darkMinimalTilesImageryLayer } from "./controllers/tiles";
import { Settings } from "./overlays/Settings/Settings";

export const MapContainer = memo(function MapContainer() {
    return (
        <MinimalViewer
            className={cn.container}
            baseLayer={darkMinimalTilesImageryLayer}
            // resolutionScale={0.5}
            targetFrameRate={60}
        >
            <TerrainLayer />
            {/* <MouseEventLayer /> */}
            <EarthquakeLayer />
            <Settings />
        </MinimalViewer>
    );
});
