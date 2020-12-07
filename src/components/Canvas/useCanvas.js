import { useRef, useEffect } from "react";

const useCanvas = (draw, dimension = "2d") => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (typeof draw !== "function") return;

        const canvas = canvasRef.current;
        const context = canvas.getContext(dimension);
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, dimension]);

    return canvasRef;
};

export default useCanvas;
