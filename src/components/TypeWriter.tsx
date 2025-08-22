import React, { useEffect, useState } from "react";

interface TypeWriterProps {
  words: string[];
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ words, delay = 150 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => {}, 1000);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
