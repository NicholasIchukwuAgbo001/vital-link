import React, { useState } from "react";

const HeroChallenge = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const challenges = [
    {
      id: 1,
      text: "Nigeria faces critical challenges with vital records management. With over 60% of births and deaths going unregistered annually, it impacts healthcare planning, resource allocation, and legal documentation.",
    },
    {
      id: 2,
      text: "Inadequate infrastructure and outdated systems in healthcare facilities lead to significant delays in certificate issuance, affecting citizens' access to essential services and legal rights.",
    },
  ];

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg cursor-pointer transition-all duration-300 hover:shadow-md"
      onClick={handleClick}
    >
      <p className="text-yellow-700 dark:text-yellow-300 font-medium">
        {challenges[isFlipped ? 1 : 0].text}
      </p>
      <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
        Click to {isFlipped ? "see first" : "see next"} challenge
      </div>
    </div>
  );
};

export default HeroChallenge;
