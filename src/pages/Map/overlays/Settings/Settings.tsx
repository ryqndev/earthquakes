import { memo, useState } from "react";
import cn from "./Settings.module.scss";
import { SettingsPanel } from "./SettingsPanel";
import SettingsIcon from "./settings.svg?react";

export const Settings = memo(function Settings() {
    const [open, setOpen] = useState(false);

    return (
        <div className={cn.container}>
            <button className={cn.button} onClick={() => setOpen((p) => !p)}>
                <SettingsIcon />
            </button>
            <SettingsPanel open={open} />
        </div>
    );
});
