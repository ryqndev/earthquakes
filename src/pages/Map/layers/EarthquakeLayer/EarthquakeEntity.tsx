import { Cartesian3, Color, NearFarScalar } from "cesium";
import { memo, useMemo } from "react";
import { Billboard, Entity } from "resium";
import { FEATURE_ITEM_TYPE } from "./controllers/useUSGSEarthquakeData";

/** for all earthquakes, just place it at a set height. Can use a better measurement later */
const EARTHQUAKE_ENTITY_ALTITUDE = 0;

const colorScaledByMagnitude = (magnitude: number) => new Color(magnitude / 10, 0, (10 - magnitude) / 10,);

export const EarthquakeEntity = memo(function EarthquakeEntity({
  geometry,
  ...props
}: FEATURE_ITEM_TYPE) {
  // const { scene, viewer } = useCesium();

  const position = useMemo(
    () =>
      Cartesian3.fromDegrees(
        geometry.coordinates[0],
        geometry.coordinates[1],
        EARTHQUAKE_ENTITY_ALTITUDE
      ),
    []
  );

  // useEffect(() => {}, []);

  //   console.log("", 255 * (props.properties.mag / 10));
  return (
    <>
      <Entity
        id={props.id}
        description={JSON.stringify(props)}
        point={{
          scaleByDistance: new NearFarScalar(1000, 3, 30000000, 0.5),
          pixelSize: props.properties.mag ** 3 / 25,
          color: colorScaledByMagnitude(props.properties.mag),
        }}
        onClick={() => console.log("ayo")}
        position={position}

      >
      </Entity>
      <Billboard image="" position={position}></Billboard>
    </>

  );
});
