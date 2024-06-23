import { Viewer as CesiumViewer } from "cesium";
import { CesiumComponentRef } from "resium";
import cn from "./Map.module.scss";
import "./vendor.css";
import { memo, useRef } from "react";
import { useTiles } from "./controllers/useTiles";
import { MinimalViewer } from "./components/MinimalViewer";

export const MapContainer = memo(function MapContainer() {
  const viewerRef = useRef<CesiumComponentRef<CesiumViewer>>(null);
  const baseLayer = useTiles();

  return (
    <MinimalViewer
      ref={viewerRef}
      className={cn.container}
      baseLayer={baseLayer}
      targetFrameRate={60}
    ></MinimalViewer>
  );
});
