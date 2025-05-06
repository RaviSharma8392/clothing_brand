import React, { useState } from "react";

const images = [
  "https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Introducing_Spring_Summer_2023_A_Collection_for_Flourishing_Ladies_1024x1024.jpg?v=1684393984",
  "https://cdn.shopify.com/s/files/1/0597/5592/1540/files/A_New_Collection_Spring_Summer_23_Coming_Soon_0a4e45b8-f0cd-4b26-9b74-d95b9e616eb0_1024x1024.png?v=1684394277",
];

const ManualCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img src={images[index]} alt="carousel" className="w-full h-auto" />

      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white text-4xl px-3 py-1 rounded-full"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white text-4xl px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default ManualCarousel;
