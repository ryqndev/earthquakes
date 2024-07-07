import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "./Settings.module.scss";

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
                    className={cn.wrapper}
                ></motion.div>
            )}
        </AnimatePresence>
    );
});
