"use client";

import React, { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import coly from "@/lib/coly";

// import TabManager from "../components/TabManager";

// Logical components
// import { useGlobalContext } from "../Context/store";
// import useGameState from "../components/useGameState";

import Modal from "../components/Modal";
import { useGlobalContext } from "../Context/store";
import ImgSlider from "../components/ImgSlider";
import { Bungee, Poppins } from "next/font/google";
import { Room } from "colyseus.js";
import Capture from "../components/Room/Capture";
import Chat from "../components/Room/Chat";
import Leaderboard from "../components/Room/Leaderboard";

const font = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const prevTime = new Date().getTime();

const getCurTime = () => {
  return Math.round((new Date().getTime() - prevTime) / 600);
};

const page = () => {
  // Multiplayer
  const searchParams = useSearchParams();
  const [roomId, setRoomId] = useState("");
  const [isRC, setIsRC] = useState(false);

  const [room, setRoom] = useState({} as Room<any>);

  // Chat
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([{ username: "", message: "" }]);

  // Leaderboard
  const [leaderboard, setLeaderboard] = useState([{ username: "", score: 0 }]);

  // Tab Manager
  const [activeTab, setActiveTab] = useState(0);

  // const [players, setPlayers] = useState([""]);

  const [objname, setObjname] = useState("");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [time, setTime] = useState(0);

  const [canRetakeImage, setCanRetakeImage] = useState(true);

  // const [myId, setMyId] = useState("");

  const [ready, setReady] = useState(false);

  const [gameState, setGameState] = useState("started");
  // const [gameState, setGameState] = useState("waiting");

  const [roundState, setRoundState] = useState("");

  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Player 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Player 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Player 3",
    },
  ];

  const [playersResponse, setPlayersResponse] = useState([
    { img: "", name: "", matched: undefined },
  ]);

  const Ready = () => {
    console.log("ROOM OBJ", room);

    if (ready) return;
    console.log("Ready", getCurTime());
    room.send("ready");
    setReady(true);
  };

  const GameStarts = (payload: any) => {
    console.log("Game Starts");
    setGameState("started");
    setLeaderboard(payload.leaderboard);
  };

  const GameEnds = (payload: any) => {
    console.log("Game Ends");
    setGameState("ended");
    setLeaderboard(payload.leaderboard);
    setActiveTab(1);
  };

  const RoundStarts = (payload: {
    curRound: number;
    objname: string;
    time: number;
  }) => {
    console.log("Round Starts", getCurTime(), payload.curRound);
    setRoundState("started");
    setCanRetakeImage(true);
    setObjname(payload.objname);
    setRound(payload.curRound + 1);
    startCounter(payload.time);
  };

  const RoundEnds = (payload: {
    leaderboard: any;
    imgs: any;
    curScore: number;
  }) => {
    console.log("Round Ends", getCurTime(), payload.curScore);
    console.log(payload.imgs);
    setRoundState("ended");
    // console.log(payload);
    setCanRetakeImage(false);
    setPlayersResponse(payload.imgs);
    setLeaderboard(payload.leaderboard);
    setScore(payload.curScore);
  };

  const submitImage = (image?: string) => {
    console.log("Sending image", image?.substring(0, 3));
    room.send("img", image);
  };

  const sendMsg = () => {
    if (!msg) return;
    if (!room) return;
    console.log("Sending msg", msg);
    room.send("chat", msg);
    // room.send("chat", {username: localStorage.getItem("username"), message: msg});
    setMsg("");
  };

  const appendMsgs = (msg: { username: string; message: string }) => {
    // append msg to msgs using setMsgs
    msgs.push(msg);
    setMsgs(msgs.slice());
    console.log(msgs);
  };

  // useEffect(() => {
  //   router.refresh();
  //   console.log("ROUTER REFRESH");
  // }
  // , [msgs]);

  useEffect(() => {
    const id = searchParams.get("id") || undefined;
    const isRoomCreator = searchParams.get("rc") || false;
    setRoomId(id || "");
    setIsRC(isRoomCreator === "true" ? true : false);
    console.log("ID", id);
    console.log("isRoomCreator", isRoomCreator);
    onJoin(id);

    function GameplaySetup(_room: Room<any>, isRoomCreator: boolean) {
      console.log("JOINED ROOM", _room);

      setRoom(_room);

      if (isRoomCreator) {
        console.log("ROOM ID", _room.id);
        setRoomId(_room.id);
      } else {
        // call Ready() after 5 seconds
        setTimeout(() => {
          if (ready) return;
          console.log("AUTO READY", getCurTime());
          _room.send("ready");
          setReady(true);
        }, 5000);
      }

      _room.onMessage("gameStarts", (payload: any) => GameStarts(payload));

      _room.onMessage("gameEnds", (payload: any) => GameEnds(payload));

      _room.onMessage(
        "roundStarts",
        (payload: { curRound: number; objname: string; time: number }) => {
          RoundStarts(payload);
        }
      );

      _room.onMessage("roundEnds", (payload: any) => {
        RoundEnds(payload);
      });

      _room.onMessage("chat", (msg: { username: string; message: string }) => {
        appendMsgs(msg);
      });
    }

    function onJoin(id?: string) {
      if (id) {
        coly.client
          .joinById(id)
          .then((_room) => {
            GameplaySetup(_room, false);

            // setRoom(_room);
            // console.log("JOINED ROOM", _room);
          })
          .catch((e) => {
            alert("Error: joining room, try again with valid room id");
            console.log("JOIN ERROR", e);
          });
      } else {
        coly.client
          .joinOrCreate("my_room", {
            username: localStorage.getItem("username"),
          })
          .then((_room) => {
            const _isRC = searchParams.get("rc") === "true" || false;
            console.log("IS RC", _isRC);
            GameplaySetup(_room, _isRC);
            // room.onMessage("img", (message: string) => {
            //   console.log("IMG " + message);
            // });
            // room.onMessage("ready", OnReadyMsgs);
          })
          .catch((e) => {
            alert("Error: joining room, try again with valid room id");
            console.log("JOIN ERROR", e);
          });
      }
    }

    // function OnChatMsgs(message: string) {}
    // function OnImgMsgs(message: string) {}
    // function OnReadyMsgs(message: string) {}

    // function onConnect() {
    //   setIsConnected(true);
    // }

    // function onDisconnect() {
    //   setIsConnected(false);
    // }

    // function onMessage(data: any) {
    //   setMsgs(data);
    // }

    // function onRoundStart(data: any) {
    //   setRoundState("started");
    //   console.log(data);
    //   setObjname(data.objectname);
    //   setScore(data.score);
    //   setRound(data.round);
    //   startCounter(data.time);
    // }

    // function onRoundEnd(data: any) {
    //   setRoundState("ended");
    //   tabState[1](1);
    //   let players_res: { name: any; data: any }[] = [];
    //   const dataa = data.data;
    //   // Object.keys(dataa).forEach((key) => {
    //   //   // players_res.push({ name: key, data: dataa[key] });
    //   // });

    //   setPlayersResponse(dataa);
    //   console.log(dataa);

    //   // setPlayersResponse(players_res);
    // }

    // function onLeaderboard(data: any) {
    //   setLeaderboard(data);
    // }

    // function onGameState(data: any) {
    //   setGameState(data);
    //   console.log("Game State: ", data);
    // }

    // socket.on("connect", onConnect);
    // socket.on("disconnect", onDisconnect);
    // socket.on("gamestate", onGameState);
    // socket.on("message", onMessage);
    // socket.on("roundstart", onRoundStart);
    // socket.on("roundend", onRoundEnd);
    // socket.on("leaderboard", onLeaderboard);

    // connect();

    return () => {
      // socket.off("connect", onConnect);
      // socket.off("disconnect", onDisconnect);
      // socket.off("gamestate", onGameState);
      // socket.off("message", onMessage);
      // socket.off("roundstart", onRoundStart);
      // socket.off("roundend", onRoundEnd);
      // socket.off("leaderboard", onLeaderboard);
    };
  }, []);

  // function connect() {
  //   try {
  //     socket.connect();
  //     socket.emit("join", localStorage.getItem("username") || "unknown");
  //     socket.emit("ready", ready);
  //     setIsConnected(true);
  //   } catch (err) {
  //     alert("Error connecting to server");
  //     console.log(err);
  //   }
  // }

  // function disconnect() {
  //   socket.disconnect();
  //   setIsConnected(false);
  // }

  async function startCounter(delay: number) {
    for (let i = delay; i >= 0; i--) {
      setTime(i);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    // for (let i = 0; i <= delay; i++) {
    //   setTime(delay - i);
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    // }
  }

  const { username } = useGlobalContext();

  // const setMsg = (msg: string) => {
  //   updateMsg(msg);
  // };

  // const setMsgs = (msgs: string[]) => {
  //   // updateMsgs(msgs);
  // };

  return (
    <div className="relative h-full">
      <div className={`${poppins.className}`}></div>
      {gameState === "waiting" && (
        <Modal
          customClose={["Quit", "/menu"]}
          enable={true}
          defaultOpen={true}
          actions={
            <div>
              {ready ? (
                <div className={`font-semibold text-lg ${poppins.className}`}>
                  Wait for others
                </div>
              ) : (
                <button
                  disabled={!room}
                  className={`btn btn-secondary font-bold ${poppins.className}`}
                  onClick={() => {
                    Ready();
                  }}
                >
                  Ready
                </button>
              )}
            </div>
          }
          id="a"
          btnname={"LOL"}
          title={"Object Hunt"}
        >
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Are you ready to Play?</p>
            <p className={`font-bold ${poppins.className}`}>
              Click on the below button and wait for the other players
            </p>
            {isRC && (
              <p className={`font-bold ${poppins.className}`}>
                Room Id:{" "}
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(roomId);
                  }}
                  className={`text-primary bg-zinc-800 p-1 rounded-md ${poppins.className}`}
                >
                  {roomId}
                </span>
              </p>
            )}
          </div>
        </Modal>
      )}

      {gameState === "ended" && (
        <Modal
          customClose={["Quit", "/menu"]}
          enable={true}
          defaultOpen={true}
          id="gameended"
          btnname={"LOL"}
          title={"Game Ended"}
        >
          <Leaderboard data={leaderboard} />
        </Modal>
      )}

      {roundState === "ended" && (
        <Modal
          enable={true}
          defaultOpen={true}
          id={"RoundEnd"}
          title={"Round End"}
          btnname={"lol"}
        >
          <ImgSlider data={playersResponse} objname={objname} />
        </Modal>
      )}

      <div className="my-2"></div>

      {/* <button onClick={() => setMsgs(["Soham: Hello", "Soham: Hey", "ehsaas: Hello Soham", "Soham: Test 1", "Soham: Test 2", "ehsaas: Test 3", "ehsaas: Test 4", "ehsaas: Test 5", "ehsaas: Test 6", "Soham: Test 7", "ehsaas: Test 8"])} className="btn absolute">Dummy chats</button> */}

      <div className="bg-base-200 p-2 m-1 rounded-md flex justify-between">
        <div className={`text-xl ${font.className}`}>
          Find a{" "}
          <span className={`text-primary capitalize ${font.className}`}>
            {objname || "Object"}
          </span>
        </div>
        <div className={`text-xl ${poppins.className}`}>
          {/* <span className="countdown font-mono font-bold text-primary">
            <span id="game-countdown"></span>
          </span> */}
          <></>
          {time}s left
        </div>
      </div>

      <div
        className={`flex justify-between text-md m-1 bg-base-200 p-2 ${poppins.className} rounded-md`}
      >
        <div>Score: {score}</div>
        <div>Round: {round}</div>
      </div>

      <div className="h-full bg-red-500">
        <Capture submitImage={submitImage} canRetake={canRetakeImage} />
        <div className="tabs tabs-boxed m-1 mt-1.5">
          <a
            className={
              (activeTab == 0 && `tab-active tab w-1/2 ${font.className}`) ||
              `tab w-1/2 ${font.className}`
            }
            onClick={() => setActiveTab(0)}
          >
            Chat
          </a>
          <a
            className={
              (activeTab == 1 && `tab-active tab w-1/2 ${font.className}`) ||
              `tab w-1/2 ${font.className}`
            }
            onClick={() => setActiveTab(1)}
          >
            Leaderboard
          </a>
        </div>
        <div className="bg-blue-500 h-full w-full flex-1">
          {activeTab == 0 && (
            <Chat msg={msg} msgs={msgs} setMsg={setMsg} sendMsg={sendMsg} />
          )}
          {activeTab == 1 && <Leaderboard data={leaderboard} />}
        </div>
      </div>

      {!1 && (
        <div>
          <p className="bg-red-400 text-black m-1 rounded-md text-2xl p-2">
            You loose this round fool
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
