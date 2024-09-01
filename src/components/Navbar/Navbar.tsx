import { memo } from "react";
import { useFullscreen } from "../../controllers/useFullscreen";
import cn from "./Navbar.module.scss";
import clsx from "clsx";
import { useTheme } from "../../theme/useTheme";

export const Navbar = memo(function Navbar() {
    const { isFullscreen, toggleFullscreen } = useFullscreen();
    const { toggle: toggleTheme } = useTheme();

    return (
        <nav className={cn.container}>
            <h1 className={cn.name}>GVIS</h1>
            <div className={cn.panels}>
                <button
                    className={clsx(isFullscreen && cn.active)}
                    onClick={toggleFullscreen}
                >
                    fullscreen
                </button>
                <button onClick={toggleTheme}>theme</button>
            </div>
        </nav>
    );
});
