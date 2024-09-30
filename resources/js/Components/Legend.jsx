import React from "react";

const Legend = () => {
    return (
        <div className="legend">
            <h3>PDRB (Per Provinsi)</h3>
            <div>
                <i style={{ background: "#800026" }}></i> Rp1.000 Triliun
            </div>
            <div>
                <i style={{ background: "#BD0026" }}></i> Rp500 - Rp1.000
                Triliun
            </div>
            <div>
                <i style={{ background: "#E31A1C" }}></i> Rp200 - Rp500 Triliun
            </div>
            <div>
                <i style={{ background: "#FC4E2A" }}></i> Rp100 - Rp200 Triliun
            </div>
            <div>
                <i style={{ background: "#FD8D3C" }}></i> Rp50 - Rp100 Triliun
            </div>
            <div>
                <i style={{ background: "#FEB24C" }}></i> Rp50 Triliun{" "}
            </div>
        </div>
    );
};

export default Legend;
