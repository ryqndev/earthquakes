import cn from "./Map.module.scss";
import "./vendor.css";
import { memo } from "react";
import { darkMinimalTilesImageryLayer, terrainProvider } from "./controllers/tiles";
import { MinimalViewer } from "./components/MinimalViewer";
import { EarthquakeLayer } from "./layers/EarthquakeLayer/EarthquakeLayer";
import { MouseEventLayer } from "./layers/MouseEventLayer/MouseEventLayer";

export const MapContainer = memo(function MapContainer() {
  return (
    <MinimalViewer
      className={cn.container}
      baseLayer={darkMinimalTilesImageryLayer}
      terrainProvider={terrainProvider}
      targetFrameRate={60}

    >
      <MouseEventLayer />
      <EarthquakeLayer />
    </MinimalViewer>
  );
});
