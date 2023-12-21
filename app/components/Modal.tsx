import React, { useState } from "react";
// import { useRouter } from "next/navigation";

import { Bungee, Poppins } from "next/font/google";

const font1 = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const font2 = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// import { useSpring, animated } from '@react-spring/web'
// import styled from 'styled-components';

interface Props {
  id: string;
  title: string;
  btnname: any;
  children: React.ReactNode;
  modalClassName?: string;
  buttonClassName?: string;
  actions?: JSX.Element;
  enable?: boolean;
  defaultOpen?: boolean;
  customClose?: string[];
}

function Modal(props: Props) {
  const [isOpen, setIsOpen] = useState(props.defaultOpen || false);
  // const router = useRouter();

  // const animation = useSpring({
  //   config: {
  //     duration: 250
  //   },
  //   opacity: isOpen ? 1 : 0,
  //   transform: isOpen ? `translateY(0)` : `translateY(-100%)`
  // });

  return (
    <>
      {props.defaultOpen || (
        <label
          onClick={() => setIsOpen(!isOpen)}
          className={`btn ${props.buttonClassName} ${font1.className}`}
        >
          {props.btnname}
        </label>
      )}

      <input
        type="checkbox"
        id={props.id}
        checked={isOpen}
        defaultChecked={props.defaultOpen}
        onChange={(e) => {}}
        className="modal-toggle"
      />

      <div className={`modal ${props.modalClassName}`}>
        {/* <animated.div style={animation}> */}
        <div
          className={`modal-box bg-base border-2 nobar broder-white ${font1.className}`}
        >
          <h3 className="font-bold text-2xl text-primary">{props.title}</h3>
          <div className="flex flex-col mt-3">{props.children}</div>
          <div className="modal-action flex justify-between">
            <div>{props.actions}</div>

            {props.customClose ? (
              <label
                onClick={() => {
                  window.location.href =
                    (props.customClose && props?.customClose[1]) || "/";
                  // router.push(
                  //   (props.customClose && props.customClose[1]) || "/"
                  // );
                  // router.refresh();
                }}
                className={`btn btn-error ${font1.className}`}
              >
                {props.customClose[0]}
              </label>
            ) : (
              <>
                <label
                  onClick={() => setIsOpen(false)}
                  className={`btn btn-error ${font1.className}`}
                >
                  Close
                </label>
              </>
            )}
          </div>
        </div>
        {/* </animated.div> */}
      </div>
    </>
  );
}

export default Modal;
