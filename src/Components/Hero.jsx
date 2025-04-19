import React, { useState, useEffect } from "react";

const Sliders = [
  {
    title: "Ludo Game",
    description: "Our Ludo game",
    image: "Image/4407253.jpg",
  }, 

  {
    title: "White Kube",
    description: "Our White Kube",
    image: "Image/chess.jpg",

  },
  {
    title: "The Chase",
    description: "Our The Chase",

    image: "Image/chess.jpg",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev +  1  ) % Sliders.length);
    },   3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full sm:w-3/4 h-64 sm:h-80 lg:h-96 flex justify-center items-center mx-auto relative mt-20">
      <div className="w-full  max-w-3xl bg-green-500 mx-auto rounded-xl overflow-hidden shadow-lg relative">
        {Sliders.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 "
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full p-4">
              <h2 className="text-xl sm:text-2xl font-semibold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        {/* Height for slide section */}
        <div className="h-80 "></div>
      </div>
    </section>
  );
};

export default Hero;
