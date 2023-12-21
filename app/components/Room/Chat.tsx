import React, { useEffect, useRef } from "react";
import { Bungee, Poppins } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

interface Props {
  msg: string;
  msgs: { username: string; message: string }[];
  setMsg: (msg: string) => void;
  sendMsg: () => void;
}

const Chat = (props: Props) => {
  const chatListRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    chatListRef?.current?.scrollTo(0, chatListRef?.current?.scrollHeight);
  }, [props.msgs]);

  // return (
  //   <div className="pl-1 pr-1 h-full">
  //     <div
  //       id="chat-list"
  //       ref={chatListRef}
  //       className={`flex flex-col gap-1 bg-base-200 w-full h-1/4 nobar mb-1.5 overflow-x-scroll ${poppins.className}`}
  //     >
  //       {props.msgs.map((m: { username: string; message: string }, idx) => {
  //         return (
  //           m.username && (
  //             <div className="bg-base-200 p-1" key={idx}>
  //               {m.username}: {m.message}
  //             </div>
  //           )
  //         );
  //       })}
  //     </div>

  //     <input
  //       type="text"
  //       value={props.msg}
  //       onKeyDown={(e) => {
  //         if (e.key === "Enter") {
  //           props?.sendMsg();
  //         }
  //       }}
  //       onChange={(e) => props.setMsg(e.target.value)}
  //       placeholder="Type message here"
  //       className={`input leading-none rounded w-full bg-base-200 mb-2 stext-mg text-white ${poppins.className}`}
  //     />
  //   </div>
  // );
  // };
  return (
    <div id="chat" className="flex flex-col m-2 p-2 h-full">
      <div className="text-primary text-left text-xl font-bold p-1">CHAT</div>
      <div
        id="chat-list"
        ref={chatListRef}
        className="flex flex-col gap-1 w-full p-2 overflow-auto h-44"
      >
        {props.msgs.map((m: { username: string; message: string }, idx) => m.username && (
          <div className={poppins.className} key={idx}>
            {m.username}: {m.message}
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center justify-between mt-2">
        <input
          type="text"
          placeholder="Type here"
          value={props.msg}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.sendMsg();
            }
          }}
          onChange={(e) => props.setMsg(e.target.value)}
          className={`input bg-slate-600 input-bordered w-full ${poppins.className}`}
        />
        <button className={`btn btn-primary ${bungee.className}`} onClick={props.sendMsg}>
          Send
        </button>

        {/* <button className="btn" onClick={ReciveState}>STATE</button> */}

        {/* <input
                type="text"
                placeholder="Type here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input bg-slate-600 input-bordered w-full"
            />
            <button className="btn btn-primary" onClick={sendMessage}>
                Send
            </button> */}
      </div>
    </div>
  );
};

export default Chat;
