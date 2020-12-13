import { useRef, useEffect, useContext } from "react";
import { ViewSizeContext } from "../../context";

const useCanvas = (draw, dimension = "2d") => {
    const canvasRef = useRef(null);
    const viewSize = useContext(ViewSizeContext);

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

    useEffect(() => {
        const { current: canvas } = canvasRef;
        const context = canvas.getContext(dimension);

        const { width, height } = viewSize;
        // 캔버스 더블 사이즈: 레티나 디스플레이 대응
        canvas.width = width * 2;
        canvas.height = height * 2;
        context.scale(2, 2);
    }, [viewSize, dimension]);

    return canvasRef;
};

export default useCanvas;
