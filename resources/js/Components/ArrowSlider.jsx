import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Kamu bisa gunakan icon dari react-icons

// Custom Previous Arrow
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-gradient-to-r from-[#5E7ADD] to-[#2D3985]  rounded-full p-2 `} // Tailwind styling
            style={{ ...style, display: "block", left: "-40px", zIndex: 10 }} // Optional inline styling
            onClick={onClick}
        >
            <FaArrowLeft className="text-blue-700" />
        </div>
    );
}

// Custom Next Arrow
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-gradient-to-r from-[#5E7ADD] to-[#2D3985] rounded-full p-2`} // Tailwind styling
            style={{ ...style, display: "block", right: "-40px", zIndex: 10 }} // Optional inline styling
            onClick={onClick}
        >
            <FaArrowRight className="text-white" />
        </div>
    );
}

export { PrevArrow, NextArrow };
