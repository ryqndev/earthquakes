import { memo, useMemo } from "react";
import cn from "./EarthquakeTooltip.module.scss";
import { FEATURE_ITEM_TYPE } from "../controllers/useUSGSEarthquakeData";
import { Cartographic, Color, SceneTransforms } from "cesium";
import { useCesium } from "resium";

interface EarthquakeTooltipProps extends FEATURE_ITEM_TYPE {
    ref?: any;
}

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180.0;

export const EarthquakeTooltip = memo(function EarthquakeTooltip({
    ref,
    ...props
}: EarthquakeTooltipProps) {
    const { scene } = useCesium();

    if (!scene) return;

    const tooltipPos = useMemo(() => {
        const cartograph = new Cartographic(
            degreesToRadians(props.geometry.coordinates[0]),
            degreesToRadians(props.geometry.coordinates[1]),
            props.geometry.coordinates[2]
        );

        const cartesian3 = Cartographic.toCartesian(cartograph);

        return SceneTransforms.wgs84ToWindowCoordinates(scene, cartesian3);
    }, []);

    return (
        <div
            className={cn.tooltip}
            style={{ top: tooltipPos?.y, left: tooltipPos?.x }}
        >
            <h1>{props.properties.mag.toFixed(1)} magnitude</h1>
            <p>{new Date(props.properties.time).toString()}</p>
            <p>{props.properties.place}</p>
        </div>
    );
});
