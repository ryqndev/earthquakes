import { ComponentProps, memo } from "react";
import { Viewer } from "resium";

/**
 * Removes all of the extra UI chrome that comes with the base Cesium component
 */
export const MinimalViewer = memo(function MinimalViewer(
  props: Partial<ComponentProps<typeof Viewer>>
) {
  return (
    <Viewer
      terrainShadows={undefined}
      full
      baseLayerPicker={false}
      homeButton={false}
      timeline={false}
      targetFrameRate={60}
      fullscreenButton={false}
      navigationHelpButton={false}
      geocoder={false}
      selectionIndicator={false}
      sceneModePicker={false}
      infoBox={false}
      animation={false}
      {...props}
    />
  );
});
