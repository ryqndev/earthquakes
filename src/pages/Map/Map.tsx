import cn from "./Map.module.scss";
import "./vendor.css";
import { memo, useRef } from "react";
import { darkMinimalTilesImageryLayer } from "./controllers/tiles";
import { MinimalViewer } from "./components/MinimalViewer";
import { EarthquakeLayer } from "./layers/EarthquakeLayer/EarthquakeLayer";
import { Entity } from "resium";

export const MapContainer = memo(function MapContainer() {
  return (
    <MinimalViewer
      className={cn.container}
      baseLayer={darkMinimalTilesImageryLayer}
      targetFrameRate={60}
    >
      <EarthquakeLayer />
    </MinimalViewer>
  );
});
