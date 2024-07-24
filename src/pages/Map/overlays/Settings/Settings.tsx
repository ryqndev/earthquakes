import { memo } from "react";
import cn from "./Settings.module.scss";
import { SettingsPanel } from "./SettingsPanel";
import SettingsIcon from "./settings.svg?react";
import { useBooleanState } from "../../../../controllers/useBooleanState";

export const Settings = memo(function Settings() {
    const { value: open, toggle } = useBooleanState(false);

    return (
        <div className={cn.container}>
            <button className={cn.button} onClick={toggle}>
                <SettingsIcon />
            </button>
            <SettingsPanel open={open} />
        </div>
    );
});
