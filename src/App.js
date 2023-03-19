import { useEffect, useRef, useState } from "react";

function App() {
    const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);
    const [canvasCTX, setCanvasCTX] = useState(null);
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(10);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 900;
        canvas.height = 500;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setCanvasCTX(ctx);
    }, [canvasRef]);

    const SetPos = (e) => {
        setMouseData({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const Draw = (e) => {
        if (e.buttons !== 1) return;
        const ctx = canvasCTX;
        ctx.beginPath();
        ctx.moveTo(mouseData.x, mouseData.y);
        setMouseData({
            x: e.clientX,
            y: e.clientY,
        });
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        // Set the line cap to round
        ctx.lineCap = "round";
        ctx.stroke();
    };
    const Capture = () =>{
      const uri = canvasRef.current.toDataURL();
      var link = document.createElement("a");
      link.href = uri;
      document.body.appendChild(link);
      link.download = "Test"
      link.click();
      document.body.removeChild(link);
      
    }

    return (
        <div className = "place-content-center">
          
            <canvas className="border-4 border-sky-500 bg-white"
                ref={canvasRef}
                onMouseEnter={(e) => SetPos(e)}
                onMouseMove={(e) => SetPos(e)}
                onMouseDown={(e) => SetPos(e)}
                onMouseMove={(e) => Draw(e)}
            ></canvas>
            
            <div
                className="controlpanel mx-5 my-3 grid-flow-row auto-rows-max content-center"
                style={{
                    position: "absolute",
                    width: "100%",
                }}
            >
                <input
                className="my-auto self-center"
                    type="range"
                    value={size}
                    max={40}
                    onChange={(e) => {
                        setSize(e.target.value);
                    }}
                />
                <input
                className="my-auto mx-5 self-center"
                    type="color"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
                <button className="bg-sky-500 rounded-lg mx-5 px-4 my-auto self-stretch"
                    onClick={() => {
                        const ctx = canvasCTX;
                        ctx.clearRect(
                            0,
                            0,
                            canvasRef.current.width,
                            canvasRef.current.height
                        );
                        ctx.fillStyle = "white";
                        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                    }}
                >
                    Clear
                </button>
                <button className="bg-sky-500 rounded-lg mx-4 px-4 my-auto"
                    onClick={() => {
                        Capture();
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default App;