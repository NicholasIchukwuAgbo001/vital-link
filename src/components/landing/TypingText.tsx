import React, { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  speed = 100,
  pauseDuration = 2000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentString = texts[currentTextIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          setCurrentText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === currentString.length - 1) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, texts, currentTextIndex, speed, pauseDuration]);

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
