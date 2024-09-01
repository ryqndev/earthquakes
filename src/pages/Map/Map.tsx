import cn from "./Map.module.scss";
import "./vendor.css";
import { memo } from "react";
import { MinimalViewer } from "./components/MinimalViewer";
import { EarthquakeLayer } from "./layers/EarthquakeLayer/EarthquakeLayer";
import { ImageryLayer } from "resium";
import { ArcGisMapServerImageryProvider } from "cesium";
import { useMapSettingsStore } from "./controllers/settings/useMapSettingsStore";
import { Overlays } from "./overlays/Overlays";

export const MapContainer = memo(function MapContainer() {
    const { showTectonicPlates } = useMapSettingsStore(
        ({ showTectonicPlates }) => ({
            showTectonicPlates,
        })
    );

    return (
        <MinimalViewer className={cn.container} targetFrameRate={60}>
            {showTectonicPlates && (
                <ImageryLayer
                    imageryProvider={ArcGisMapServerImageryProvider.fromUrl(
                        "//earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries/MapServer"
                    )}
                />
            )}
            <EarthquakeLayer />

            <Overlays />
        </MinimalViewer>
    );
});
