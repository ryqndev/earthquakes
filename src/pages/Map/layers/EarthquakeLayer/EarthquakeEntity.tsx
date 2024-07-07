import { Cartesian3, Color, HeightReference, NearFarScalar, PolylineDashMaterialProperty, PolylineGlowMaterialProperty } from "cesium";
import { memo, useMemo } from "react";
import { Billboard, Entity, PolylineGraphics } from "resium";
import { FEATURE_ITEM_TYPE } from "./controllers/useUSGSEarthquakeData";

const M_TO_KM = 1000;

const colorScaledByMagnitude = (magnitude: number) => new Color(magnitude / 10, 0, (10 - magnitude) / 10,);

export const EarthquakeEntity = memo(function EarthquakeEntity({
  geometry,
  ...props
}: FEATURE_ITEM_TYPE) {

  const surfacePosition = Cartesian3.fromDegrees(geometry.coordinates[0], geometry.coordinates[1], 0);

  const position = useMemo(
    () =>
      Cartesian3.fromDegrees(
        geometry.coordinates[0],
        geometry.coordinates[1],
        geometry.coordinates[2] * -M_TO_KM,
      ),
    []
  );


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
        position={position}

      >
        <PolylineGraphics
          positions={[position, surfacePosition]}
          width={1}
          material={new PolylineGlowMaterialProperty({
            color: new Color(0, 1, 1),
            glowPower: 1,
          })}

        />
      </Entity>
      {/* <Billboard image="" position={position}></Billboard> */}
    </>

  );
});
