import { memo } from "react";
import { Toggle } from "../../../../../components/Toggle/Toggle";
import { useMapSettingsStore } from "../../../controllers/settings/useMapSettingsStore";

export const RenderOnSurfaceToggle = memo(function RenderOnSurfaceToggle() {
    const { renderOnSurface, toggleRenderOnSurface } = useMapSettingsStore(
        ({ renderOnSurface, toggleRenderOnSurface }) => ({
            renderOnSurface,
            toggleRenderOnSurface,
        })
    );
    return (
        <Toggle
            id="render-on-surface-toggle"
            value={renderOnSurface}
            onToggle={toggleRenderOnSurface}
        >
            Render on Surface
        </Toggle>
    );
});
