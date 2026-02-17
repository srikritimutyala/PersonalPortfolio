"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words = ["Hi 👋! I'm Srikriti!"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1200,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting) {
      // typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    } else {
      // deleting
    //   timeout = setTimeout(() => {
    //     setText(currentWord.slice(0, text.length - 1));
    //     if (text.length - 1 === 0) {
    //       setIsDeleting(false);
    //       setWordIndex((i) => i + 1);
    //     }
    //   }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span className="ml-1 opacity-0 inline-block h-6 w-[0px] animate-pulse bg-white/80 " />
    </span>
  );
}
