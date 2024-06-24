import { Cartesian3 } from "cesium";
import { memo } from "react";
import { Entity } from "resium";
import { FEATURE_ITEM_TYPE } from "./controllers/useUSGSEarthquakeData";

/** for all earthquakes, just place it at a set height. Can use a better measurement later */
const EARTHQUAKE_ENTITY_ALTITUDE = 1000;

export const EarthquakeEntity = memo(function EarthquakeEntity({
  geometry,
  ...props
}: FEATURE_ITEM_TYPE) {
  return (
    <Entity
      id={props.id}
      point={{ pixelSize: 10 }}
      position={Cartesian3.fromDegrees(
        geometry.coordinates[0],
        geometry.coordinates[1],
        EARTHQUAKE_ENTITY_ALTITUDE
      )}
    />
  );
});
