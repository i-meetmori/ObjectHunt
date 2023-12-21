"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Bungee_Spice } from "next/font/google";

const font = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  href?: string;
}

function Button(props: Props) {
  const router = useRouter();

  const playSound = () => {
    const audio = new Audio("/mouseclick.mp3");
    audio.play();
  };

  const onCustomClick = () => {
    playSound();
    if (props.onClick) {
      props.onClick();
    } else {
      router.push(props.href || "");
    }
  };

  return (
    <>
      <button
        className={`font-semibold cartoonish-btn ${props.className} `} //${font.className}
        onClick={onCustomClick}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
