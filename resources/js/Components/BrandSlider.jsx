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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 rounded-full p-2 cursor-pointer z-10"
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
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowRight className="text-white" />
        </div>
    );
}

function BrandSlider() {
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
        arrows: true, // Make sure arrows are enabled
        prevArrow: <PrevArrow />, // Custom Previous Arrow
        nextArrow: <NextArrow />, // Custom Next Arrow
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
        <div className="slider-container pb-10 w-[90%] m-auto relative">
            <Slider {...settings}>
                {logos.map((logo) => (
                    <div key={logo.id} className="text-center p-4">
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

export default BrandSlider;
