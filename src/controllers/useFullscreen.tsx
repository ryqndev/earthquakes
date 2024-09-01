import { useCallback, useEffect, useState } from "react";

export const useFullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        function onFSChange() {
            setIsFullscreen(Boolean(document.fullscreenElement));
        }

        document.addEventListener("fullscreenchange", onFSChange);
        return () =>
            document.removeEventListener("fullscreenchange", onFSChange);
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (document.fullscreenElement) return document.exitFullscreen();
        document.getElementById("app")!.requestFullscreen();
    }, []);

    return {
        toggleFullscreen,
        isFullscreen,
    };
};
