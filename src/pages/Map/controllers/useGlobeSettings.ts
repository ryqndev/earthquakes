import { useState } from "react";

export const useGlobeSettings = () => {
    const [enableLighting, setEnableLighting] = useState(true);

    return {
        enableLighting,
        setEnableLighting,
    };
};
