import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Previous Arrow Component
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gradient-to-r from-[#5E7ADD] to-[#2D3985]  hover:bg-blue-700 rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowLeft className="text-white" />
        </div>
    );
}

// Custom Next Arrow Component
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gradient-to-r from-[#5E7ADD] to-[#2D3985]  hover:bg-blue-700 rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowRight className="text-white" />
        </div>
    );
}

function SitusTerkait() {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        fetch("json/logos.json")
            .then((response) => response.json())
            .then((data) => setLogos(data.logos))
            .catch((error) => console.error("Error loading JSON: ", error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Ensure arrows are enabled
        prevArrow: <PrevArrow />, // Custom Previous Arrow
        nextArrow: <NextArrow />, // Custom Next Arrow
        customPaging: (i) => (
            <div className="w-8 h-3 bg-gray-300 rounded-full transition-all"></div>
        ), // Custom dots
        appendDots: (dots) => (
            <div>
                <ul className="flex  justify-center mt-4">
                    {dots.map((dot, index) => (
                        <li key={index} className="min-w-fit">
                            <div
                                className={`w-full rounded-full transition-all ${
                                    dot.props.className.includes("slick-active")
                                        ? "gap-16 bg-[#A5B1E8] w-[81px] h-[8px]" // Active color
                                        : "gap-16 bg-gray-300 w-[16px] h-[8px]" // Inactive color
                                }`}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container pb-10 w-[85%] m-auto relative bg-[#F0F3FF] pt-10 rounded-md">
            <Slider {...settings}>
                {logos.map((logo) => (
                    <div key={logo.id} className="text-center">
                        <img
                            src={logo.url}
                            alt={logo.name}
                            className="mx-auto h-24 w-56 object-contain"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SitusTerkait;
