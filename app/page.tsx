"use client";
import Modal from "./components/Modal";
import Button from "./components/Button";

import {
    Bungee,
    Bungee_Shade,
    Bungee_Inline,
    Bungee_Hairline,
    Bungee_Outline,
  } from "next/font/google";

  const font1 = Bungee({
    weight: "400",
    subsets: ["latin"],
  });
  
  const font2 = Bungee_Shade({
    weight: "400",
    subsets: ["latin"],
  });
  
  const font3 = Bungee_Inline({
    weight: "400",
    subsets: ["latin"],
  });
  
  const font4 = Bungee_Hairline({
    weight: "400",
    subsets: ["latin"],
  });
  
  const font5 = Bungee_Outline({
    weight: "400",
    subsets: ["latin"],
  });

export default function Home() {
    return (
        <div className="flex flex-col justify-around h-screen">
            <h1 className="text-primary text-4xl font-bold text-center">
                <img className="mx-auto" width={260} src={"/images/logo.png"} alt="logo" />
            </h1>

            <style>
                {`
                    .soham {
                        animation: anim1 2s infinite ease-in-out;
                    }
                    @keyframes anim1 {
                        0% {
                            transform: scale(.8);
                        }
                        50% {
                            transform: scale(1);
                        }
                        100% {
                            transform: scale(.8);
                        }
                    }
                `} 
            </style>

            <div className="flex flex-col justify-center p-3 gap-3">
          
                <Button href="/menu" className={`btn-accent ${font1.className}`}>Play As Guest</Button>
                
                <Modal
                    enable={true}
                    id="help_modal"
                    title="How to play"
                    buttonClassName={`cartoonish-btn ${font1.className}`}
                    btnname={"How to Play"} 
                >
                    Fuck around and find out fool
                </Modal>
            </div>
            <div className="bg-slate-500 m-2 py-7 text-black flex justify-center items-center">Ads #1</div>

            
            {/* <p className="p-0 m-0 self-center absolute bottom-5">
                By Company name
            </p> */}
        </div>
    );
}
