import React from 'react';
import useCanvas from './useCanvas';

const Canvas = ({ draw, dimension, ...rest }) => {
    const canvasRef = useCanvas(draw, dimension);
    return <canvas ref={canvasRef} {...rest} />
}

export default Canvas;