import { memo } from "react";
import cn from "./InfoPanel.module.scss";

export const InfoPanel = memo(function InfoPanel() {
    return <div className={cn.container}></div>;
});
