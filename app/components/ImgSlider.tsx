import { Poppins } from "next/font/google";
import React from "react";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import not_found from "../../public/images/not found.png";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const sliderContainerStyle = {
  height: "100%",
  overflow: "hidden",
};

const spanStyle = {
  padding: "24px",
  background: "#fff9",
  filter: "",
  // borderRadius: "1rem",
  fontSize: "2rem",
  textShadow: "2px 2px 2px #0005",
  color: "#000000",
};

const divStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
  // borderRadius: "1rem",
};

// const slideImages = [
//   {
//     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Player 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     caption: "Player 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Player 3",
//   },
// ];

interface Props {
  data: Array<{ img: string; name: string; matched: boolean | undefined }>;
  objname: string;
}

function ImgSlider(props: Props) {
  return (
    <>
      <div style={sliderContainerStyle}>
        <Slide
          duration={3000}
          autoplay={true}
          infinite={false}
          arrows={false}
          transitionDuration={200}
          easing="ease"
        >
          {props.data.map((entry, index) => (
            <div key={index}>
              <div
                className="py-60"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${
                    entry.img ? entry.img : `"${not_found.src}"`
                  })`,
                }}
              >
                <span
                  className={`absolute bottom-0 p-4 backdrop-blur-md w-full text-2xl font-semibold text-primary ${poppins.className}`}
                >
                  {entry.name}
                  <br />
                  <p className="text-gray-800 p-1 rounded bg-slate-400 text-sm">
                    {entry.matched === true
                      ? `🎉 They found it`
                      : `Lol they even don't have a ${props.objname}.`}
                  </p>
                </span>
              </div>
              {/* {entry.matched === true ? (
                <label key={index}>
                  {" "}
                  They found{" "}
                  <span
                    className={`text-primary capitalize mt-3 ${poppins.className}`}
                  >
                    {props.objname || "Object"}
                  </span>
                </label>
              ) : (
                <label key={index}>
                  {" "}
                  LOL, They can't even find{" "}
                  <span
                    className={`text-primary capitalize mt-3 ${poppins.className}`}
                  >
                    {props.objname || "Object"} around them
                  </span>
                </label>
              )} */}
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default ImgSlider;
