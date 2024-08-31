import {
    Cartesian3,
    Color,
    NearFarScalar,
    PolylineGlowMaterialProperty,
} from "cesium";
import { memo, useCallback, useMemo } from "react";
import { Entity, PolylineGraphics } from "resium";
import { FEATURE_ITEM_TYPE } from "./controllers/useUSGSEarthquakeData";
import { EarthquakeTooltip } from "./components/EarthquakeTooltip";
import { useBooleanState } from "../../../../controllers/useBooleanState";
import { useMapSelectionStore } from "../../controllers/selection/map-selection-store";

const KM_TO_M = 1000;

const colorScaledByMagnitude = (magnitude: number) =>
    new Color(magnitude / 10, 0, (10 - magnitude) / 10);

type EarthquakeEntityProps = FEATURE_ITEM_TYPE & {
    /** draws a line between the epicenter of the earthquake to the surface */
    showDepthLine?: boolean;

    /** should render the center of the entity on the surface of the globe */
    renderOnSurface?: boolean;
};

export const EarthquakeEntity = memo(function EarthquakeEntity({
    showDepthLine,
    renderOnSurface,
    geometry,
    ...props
}: EarthquakeEntityProps) {
    const {
        value: hovered,
        setTrue: showTooltip,
        setFalse: hideTooltip,
    } = useBooleanState(false);

    const surfacePosition = Cartesian3.fromDegrees(
        geometry.coordinates[0],
        geometry.coordinates[1],
        0
    );

    const position = useMemo(
        () =>
            Cartesian3.fromDegrees(
                geometry.coordinates[0],
                geometry.coordinates[1],
                geometry.coordinates[2] * -KM_TO_M
            ),
        []
    );

    const selectEntity = useMapSelectionStore((state) => state.selectEntity);
    const select = useCallback(() => {
        selectEntity(props.id);
    }, []);

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
                position={renderOnSurface ? surfacePosition : position}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                onClick={select}
            >
                {showDepthLine && (
                    <PolylineGraphics
                        positions={[position, surfacePosition]}
                        width={1}
                        material={
                            new PolylineGlowMaterialProperty({
                                color: new Color(0, 1, 1),
                                glowPower: 1,
                            })
                        }
                    />
                )}
            </Entity>
            {hovered && <EarthquakeTooltip {...props} />}
        </>
    );
});
