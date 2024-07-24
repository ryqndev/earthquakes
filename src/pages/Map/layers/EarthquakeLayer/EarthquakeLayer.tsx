import { memo } from "react";
import { useUSGSEarthquakeData } from "./controllers/useUSGSEarthquakeData";
import { EarthquakeEntity } from "./EarthquakeEntity";
import { CustomDataSource } from "resium";
import { useMapSettingsStore } from "../../controllers/settings/useMapSettingsStore";

const ONE_DAY_MS = 86400000;

const dateProps = {
    startTime: new Date(Date.now() - 200 * ONE_DAY_MS),
    endTime: new Date(),
    isInProd: true,
};

export const EarthquakeLayer = memo(function EarthquakeLayer() {
    const data = useUSGSEarthquakeData(dateProps);
    const { showDepthLine, renderOnSurface } = useMapSettingsStore(
        ({ showDepthLine, renderOnSurface }) => ({
            showDepthLine,
            renderOnSurface,
        })
    );

    if (!data) return null;

    return (
        <CustomDataSource name="earthquakes">
            {data.features.map((feature) => (
                <EarthquakeEntity
                    key={feature.id}
                    showDepthLine={showDepthLine}
                    renderOnSurface={renderOnSurface}
                    {...feature}
                />
            ))}
        </CustomDataSource>
    );
});
