import React, { useState, useEffect } from "react";
import { ViewSizeContext } from "./context";

import "./App.css";
import TransparentCard from "./animations/TransparentCard";

function App() {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const onResize = () => {
        const { clientWidth: width, clientHeight: height } = document.body;
        setSize({ width, height });
    };
    useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ViewSizeContext.Provider value={size}>
            <div className="App">
                <TransparentCard />
            </div>
        </ViewSizeContext.Provider>
    );
}

export default App;
