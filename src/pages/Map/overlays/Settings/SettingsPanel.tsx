import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "./Settings.module.scss";
import { TerrainToggle } from "./settings/TerrainToggle";
import { RenderOnSurfaceToggle } from "./settings/RenderOnSurfaceToggle";
import { ShowDepthLineToggle } from "./settings/ShowDepthLineToggle";
import { ShowTectonicPlatesToggle } from "./settings/ShowTectonicPlatesToggle";

interface SettingsPanelProps {
    open: boolean;
}

const collapsedState = { height: 0, width: 0 };
const expandedState = { height: "auto", width: "auto" };

export const SettingsPanel = memo(function SettingsPanel({
    open,
}: SettingsPanelProps) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={collapsedState}
                    animate={expandedState}
                    exit={collapsedState}
                >
                    <div className={cn.modal}>
                        <RenderOnSurfaceToggle />
                        <TerrainToggle />
                        <ShowTectonicPlatesToggle />
                        <ShowDepthLineToggle />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
