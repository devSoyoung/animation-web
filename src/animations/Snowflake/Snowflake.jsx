import React, { useEffect, useContext } from "react";
import Canvas from "../../components/Canvas";
import { ViewSizeContext } from "../../context";
const Snowflake = (props) => {
    const viewSize = useContext(ViewSizeContext);

    let flakes = [];
    let direction = -1; // -1: left, +1: right
    let prevPointer = 500;

    const addFlake = () => {
        const x = Math.ceil(Math.random() * viewSize.width);
        const r = Math.max(Math.ceil(Math.random() * 5), 2);
        const opacity = Math.min(Math.random() + 0.1, 0.7);
        flakes.push({ x, y: 0, r, opacity });
    };

    const fallFlake = () => {
        flakes.forEach((flake) => {
            const gap = flake.r / 2;
            flake.y += gap;
            flake.x += gap * direction;
        });
        // 화면 바깥으로 나간 flake 제거
        flakes = flakes.filter((flake) => flake.y < viewSize.height);
    };

    const snow = () => {
        fallFlake();
        addFlake();
    };

    const setDirectionFromCursorPosition = ({ x }) => {
        if (prevPointer === x) return;
        direction = x > prevPointer ? 1 : -1;
        prevPointer = x;
    };

    useEffect(() => {
        const intervalId = setInterval(snow, 50);
        window.addEventListener("mousemove", setDirectionFromCursorPosition);
        return () => {
            clearInterval(intervalId);
            window.removeEventListener(
                "mousemove",
                setDirectionFromCursorPosition
            );
        };
    });

    const draw = (ctx) => {
        ctx.fillStyle = "#1F2124";
        ctx.fillRect(0, 0, viewSize.width, viewSize.height);

        flakes.forEach((flake) => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.arc(flake.x, flake.y, flake.r / 2, 0, 2 * Math.PI);
            ctx.fill();
        });
    };

    return <Canvas draw={draw} />;
};

export default Snowflake;
