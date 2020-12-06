import React from 'react';
import useCanvas from './useCanvas';

const Canvas = ({ draw, ...rest }) => {
    const canvasRef = useCanvas(draw);
    return <canvas ref={canvasRef} {...rest} />
}

export default Canvas;