import React, { useState, useEffect } from "react";

const RotatingStats = () => {
  const rotatingContent = [
    {
      id: 1,
      stat: "60%",
      description: "Births unregistered annually in Nigeria",
      color: "text-white",
      bgColor: "bg-green-600",
    },
    {
      id: 2,
      stat: "70%",
      description: "Reduction in processing time with digital system",
      color: "text-green-600",
      bgColor: "bg-white",
    },
    {
      id: 3,
      stat: "100%",
      description: "Data security and compliance guarantee",
      color: "text-white",
      bgColor: "bg-green-600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`backdrop-blur-sm p-6 rounded-lg transition-opacity duration-500 h-full flex items-center ${rotatingContent[currentIndex].bgColor}`}
    >
      <div className="text-center w-full">
        <div
          className={`text-4xl font-bold ${rotatingContent[currentIndex].color} mb-2`}
        >
          {rotatingContent[currentIndex].stat}
        </div>
        <div className={`${rotatingContent[currentIndex].color} text-lg`}>
          {rotatingContent[currentIndex].description}
        </div>
      </div>
    </div>
  );
};

export default RotatingStats;
