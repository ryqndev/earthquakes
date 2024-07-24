import { memo, ReactNode } from "react";
import cn from "./Toggle.module.scss";

interface ToggleProps {
    id: string;
    children?: ReactNode;
    value: boolean;
    onToggle: () => void;
}

export const Toggle = memo(function Toggle({
    id,
    children,
    value,
    onToggle,
}: ToggleProps) {
    return (
        <div className={cn.container}>
            <div className={cn.content}>
                <label htmlFor={id}>{children}</label>
                <input
                    onChange={onToggle}
                    checked={value}
                    id={id}
                    type="checkbox"
                />
            </div>
        </div>
    );
});
