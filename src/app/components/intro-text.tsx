"use client";
import { useState, useEffect } from "react";

export default function IntroText() {
  const name = "Christy Eang";
  const items = [
    "a Web Developer.",
    "a Musician.",
    "a Foodie.",
    "a Not So Great Athlete.",
    "an Anime Lover.",
    "an ESTP.",
    "a Cambodian Woman.",
    "a Front End Fiend.",
    "a Lover of Puns.",
    "an Animal Lover.",
    "a Nerd.",
    "an Amateur Community Theatre Actor.",
  ];
  const from = "from Stockton, California.";

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < items[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setPause(true);
          setTimeout(() => setPause(false), 1500);
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % items.length);
        }
      }
    }, forward ? 100 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, pause, items]);

  return (
    <main className="flex-grow flex items-center justify-center text-xl">
      <div>
        {name}{" "}
        <span className="border-r-1 border-black">
          {items[index].substring(0, subIndex)}
        </span>
      </div>
    </main>
  );
}
