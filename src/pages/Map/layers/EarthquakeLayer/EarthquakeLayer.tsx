import { memo } from "react";
import { useUSGSEarthquakeData } from "./controllers/useUSGSEarthquakeData";
import { EarthquakeEntity } from "./EarthquakeEntity";
import { CustomDataSource } from "resium";

const ONE_DAY_MS = 86400000;

const dateProps = {
  startTime: new Date(Date.now() - 200 * ONE_DAY_MS),
  endTime: new Date(),
  isInProd: true,
};

export const EarthquakeLayer = memo(function EarthquakeLayer() {
  const data = useUSGSEarthquakeData(dateProps);

  if (!data) return null;

  return (
    <CustomDataSource name="earthquakes">
      {data.features.map((feature) => (
        <EarthquakeEntity key={feature.id} {...feature} />
      ))}
    </CustomDataSource>
  );
});
