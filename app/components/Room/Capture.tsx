"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import { useGlobalContext } from "../../Context/store";
import { Bungee, Poppins } from "next/font/google";

// const fetcher = (arg: any, ...args: any) =>
//   fetch(arg, ...args).then((res) => res.json());

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user",
};

const videoConstraints2 = {
  width: 720,
  height: 720,
  facingMode: "environment",
}; 

interface Props {
  submitImage: (imgData?: string) => void;
  canRetake: boolean;
}

const Capture = (props: Props) => {
  const { matchedState, isSubmitingState } = useGlobalContext();
  const [camearaState, setCameraState] = useState(false);
  const [imgIsCaptured, setImgIsCaptured] = useState(false);
  
  // const [isSubmiting, setIsSubmiting] = props.CaptureState;
  // const [matched, setMatched] = props.MatchedState;

  const webcamRef = useRef<Webcam>(null);
  const captureScreenRef = useRef<HTMLDivElement>(null);

  const captureImage = () => {
    // stop video
    webcamRef.current?.video?.pause();

    // hide the capture button and show the send button
    setImgIsCaptured(true);
  };

  const submitImage = () => {
    isSubmitingState[1](true);
    const imageData = webcamRef.current
      ?.getScreenshot()
      ?.replace("data:image/jpeg;base64,", "");
    props.submitImage(imageData);

    // call isSubmitingState[1](true) after 3 seconds
    setTimeout(() => {
      isSubmitingState[1](true);
    }, 3000);
    
    // retakeImage();
    // props?.socket?.emit("image", { imgData: imageData });

    // send form data to axios
    // const formData = new FormData();
    // formData.append("imgdata", imageData!);

    // axios
    //   .post("http://127.0.0.1:8000/upload/", formData)
    //   .then(function (response) {
    //     if (response.data.matched) {
    //       isSubmitingState[1](false);
    //       setImgIsCaptured(false);
    //       webcamRef.current?.video?.play();
    //       matchedState[1](response.data.matched);
    //       console.log(response.data.matched);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const retakeImage = () => {
    webcamRef.current?.video?.play();
    setImgIsCaptured(false);
    isSubmitingState[1](false);
  };

  // useState(() => {
  //   retakeImage();
  // });

  useEffect(() => {
    if (props.canRetake) {
      // console.log("retake");
      retakeImage();
    }
    // else {
    //   console.log("no retake");
    // }
  }, [props.canRetake]);

  return (
    <>
      {(matchedState[0] == -1 && (
        <div
          id="capture"
          className="flex flex-col justify-end m-1 mt-2 p-2 bg-stone-800 aspect-square rounded-lg"
          ref={captureScreenRef}
        >
          <Webcam
            className="rounded-md shadow-md bg-slate-800 aspect-square"
            alt="Loading..."
            ref={webcamRef}
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={720}
            videoConstraints={camearaState ? videoConstraints : videoConstraints2}
          >
            {/* @ts-ignore */}
            {({ getScreenshot }) => {
              if (imgIsCaptured) {
                if (isSubmitingState[0]) {
                  return (
                    <div className="flex flex-col bg-slate-700 mt-2 rounded-md p-3 items-center gap-2">
                      {/* <div className="text-primary text-sm p-0 m-0 font-bold">
                                        UPLOADING.....
                                    </div> */}
                      <progress className="progress progress-primary w-full p-0 m-0"></progress>
                    </div>
                  );
                }
                return (
                  <div className="flex gap-2">
                    <button
                      className={`btn btn-sm flex-1 btn-secondary mt-2 ${poppins.className}`}
                      onClick={submitImage}
                    >
                      Submit
                    </button>
                    <button
                      className={`btn btn-sm w-2/6 btn-error mt-2 ${poppins.className}`}
                      onClick={retakeImage}
                    >
                      Retake
                    </button>
                  </div>
                );
              } else {
                return (
                  <>
                  <button
                    className={`btn btn-sm btn-secondary mt-2  ${poppins.className}`}
                    style={{ textShadow: "2px 2px 2px #0004" }}
                    onClick={captureImage}
                  >
                    Capture
                  </button>
                  <button
                    className={`btn btn-sm btn-secondary mt-2 ${poppins.className}`}
                    style={{textShadow: "2px 2px 2px #0004"}}
                    onClick={() => {setCameraState(!camearaState)}}>
                    Rotate Camera
                  </button>
                  </>
                );
              }
            }}
          </Webcam>
        </div>
      )) || <div>Your image {matchedState[0]}% matched</div>}
    </>
  );
};

export default Capture;
