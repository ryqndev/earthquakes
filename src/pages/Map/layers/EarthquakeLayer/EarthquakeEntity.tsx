import { Cartesian3, Color } from "cesium";
import { memo } from "react";
import { Entity } from "resium";
import { FEATURE_ITEM_TYPE } from "./controllers/useUSGSEarthquakeData";

/** for all earthquakes, just place it at a set height. Can use a better measurement later */
const EARTHQUAKE_ENTITY_ALTITUDE = 1000;

export const EarthquakeEntity = memo(function EarthquakeEntity({
  geometry,
  ...props
}: FEATURE_ITEM_TYPE) {
  console.log("", 255 * (props.properties.mag / 10));
  return (
    <Entity
      id={props.id}
      point={{
        pixelSize: props.properties.mag ** 3 / 25,
        color: new Color(props.properties.mag / 10, 0, 0.9),
      }}
      position={Cartesian3.fromDegrees(
        geometry.coordinates[0],
        geometry.coordinates[1],
        EARTHQUAKE_ENTITY_ALTITUDE
      )}
    />
  );
});
