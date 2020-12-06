import React, { useEffect } from 'react';
import Canvas from '../../components/Canvas';

const Snowflake = () => {
    let flakes = [];
    let width, height;

    const addFlake = () => {
        const x = Math.ceil(Math.random() * width);
        const r = Math.max(Math.ceil(Math.random() * 5), 2);
        const opacity = Math.min(Math.random() + 0.1, 0.7);
        flakes.push({ x, y: 0, r, opacity });
    };

    const fallFlake = () => {
        flakes.forEach(flake => { flake.y += flake.r / 2; });
        // 화면 바깥으로 나간 flake 제거
        flakes = flakes.filter(flake => flake.y < height);
    };

    const snow = () => {
        fallFlake();
        addFlake();
    };

    const setWidthHeight = () => {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    };

    useEffect(() => {
        setWidthHeight();
        const intervalId = setInterval(snow, 50);
        window.addEventListener('resize', setWidthHeight);
        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', setWidthHeight);
        };
    });


    const draw = ctx => {
        ctx.fillStyle = "#1F2124";
        ctx.fillRect(0, 0, width, height);

        flakes.forEach(flake => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.arc(flake.x, flake.y, flake.r / 2, 0, 2 * Math.PI);
            ctx.fill();
        });
    };

    return <Canvas draw={draw} />
};

export default Snowflake;