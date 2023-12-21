"use client";

import React, { useRef, useState } from "react";
import { useEffect } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../Context/store";
import {
  Bungee,
  Bungee_Shade,
  Bungee_Inline,
  Bungee_Hairline,
  Bungee_Outline,
  Bungee_Spice,
  Poppins,
} from "next/font/google";

const font1 = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const font2 = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// const delay = (ms: number | undefined) => new Promise(
//   resolve => setTimeout(resolve, ms)
// );

function page() {
  const router = useRouter();
  // save the code in the state
  const [code, setCode] = useState("");

  const [username, setUsername] = useState("");

  const { BGMusicState, tabState } = useGlobalContext();

  const [CRRounds, setCRRounds] = useState(0);
  const [CRTime, setCRTime] = useState(0);

  const CRData = {
    rounds: [2, 4, 6],
    time: [20, 30, 60],
  };

  // const [canPlay, setCanPlay] = BGMusicState;

  // function toggleBG() {
  //   BGMusicState[1](false);
  // }

  // const createRoom = (data: any) => {
  //   console.log("CREATING ROOM", data);
  // }

  const handleCreateRoom = (roundId: number, timeId: number) => {
    console.log(roundId, timeId);
    router.push(`/g/?rc=${true}`);
  };

  function handlePlay() {
    router.push("/g");
  }

  function handleJoin() {
    router.push(`/g/?id=${code}`);
  }

  useEffect(() => {
    const un = window.localStorage.getItem("username")!;
    setUsername(un);
  }, []);

  return (
    <div className="flex flex-col justify-around h-screen relative">
      <h1 className="text-secondary p-4 text-2xl font-bold text-center">
        {/* Object Hunt */}
        <img
          className="mx-auto"
          width={260}
          src={"/images/logo.png"}
          alt="logo"
        />
      </h1>
      <div className="flex flex-col justify-center p-3 gap-3">
        <div className="p-2 bg-[rgba(20,20,20,0.75)] rounded-lg">
          <div className="form-control w-full">
            <label className="label">
              <span className={` ${font1.className} label-text text-lg`}>
                Enter your name
              </span>
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                localStorage.setItem("username", e.target.value);
              }}
              type="text"
              placeholder="Type here"
              className={`input input-primary input-bordered w-full ${font1.className}`}
            />
          </div>
        </div>
        <Button
          onClick={() => (username ? handlePlay() : "")}
          className={
            (username ? "" : `btndisabled ${font1.className}`) +
            `${font1.className} btn btn-accent`
          }
        >
          Play
        </Button>
        <div className="flex justify-between">
          <div className="w-3/6 px-1">
            <Modal
              id="createroom_modal"
              title="Create Room"
              btnname="Create Room"
              buttonClassName={
                (username ? "" : `btndisabled ${font1.className}`) +
                `${font1.className} cartoonish-btn w-full`
              }
              enable={username ? true : false}
              actions={
                <button
                  className="btn btn-primary"
                  onClick={() => handleCreateRoom(CRRounds, CRTime)}
                >
                  Create
                </button>
              }
            >
              Click on the button to create a room
              {/* <form className="form-control w-full gap-2 mb-3">
                <div className="flex justify-between">
                  <div className="text-xl text text-white w-5/12 flex items-center">
                    Total Rounds
                  </div>
                  <select
                    className="select w-5/12 select-bordered bg-slate-800 select-primary"
                    onChange={(e) => setCRRounds(parseInt(e?.target?.value))}
                  >
                    <option value={0} defaultChecked>
                      2
                    </option>
                    <option value={1}>4</option>
                    <option value={2}>6</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl text text-white w-5/12 flex items-center">
                    Time
                  </div>
                  <select
                    className="select w-5/12 select-bordered bg-slate-800 select-primary"
                    onChange={(e) => setCRTime(parseInt(e?.target?.value))}
                  >
                    <option value={0} defaultChecked>20s</option>
                    <option value={1}>30s</option>
                    <option value={2}>60s</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl text text-white w-5/12 flex items-center">
                    Venue
                  </div>
                  <select className="select w-5/12 select-bordered bg-slate-800 select-primary">
                    <option defaultChecked>Home</option>
                    <option>Beach</option>
                    <option>Park</option>
                    <option>School</option>
                    <option>Workplace</option>
                    <option>Restaurant</option>
                  </select>
                </div>
              </form> */}
            </Modal>
          </div>
          <div className="w-3/6 px-1">
            <Modal
              id="joinroom_modal"
              title="Join Room"
              btnname="Join Room"
              buttonClassName={
                (username ? "" : `btndisabled ${font1.className}`) +
                `${font1.className} cartoonish-btn w-full`
              }
              enable={username ? true : false}
              actions={
                <button className="btn btn-primary" onClick={handleJoin}>
                  Join
                </button>
              }
            >
              <div className="form-control w-full gap-2 mb-3">
                <div className="flex gap-6">
                  <div className="text-xl text text-white flex items-center">
                    Code
                  </div>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-primary bg-slate-800 w-full"
                  />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div></div>

      <div className="flex justify-between items-end w-full absolute p-2 bottom-0">
        <Modal
          id="setting_modal"
          title="Settings"
          buttonClassName="bg-secondary btn-outline-dark btn-circle"
          enable={true}
          btnname={
            <img className="p-[.5rem]" alt="settings" src="/settings.png" />
          }
        >
          <div className="flex flex-col gap-2">
            {/* <button className="btn" onClick={BGMusicState.toggle}>{"MUSIC " + BGMusicState.state}</button> */}

            <div className="flex justify-between items-center">
              <div className="text-xl">Sounds</div>
              <label className="swap">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onClick={BGMusicState.toggle}
                  checked={BGMusicState.state}
                />

                {/* volume on icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                </svg>

                {/* volume off icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
                </svg>
              </label>
            </div>
            <label className={`${font2.className} absolute mt-10 p-0`}>
              <p className="text-sm">Developed by</p>
              <p>Insanity crew games</p>
              <p className="text-sm">Team: Soham, Manish</p>
            </label>
          </div>
        </Modal>
        <Modal
          id="help_modal"
          title="How to play ?"
          buttonClassName="bg-secondary btn-outline-dark btn-circle"
          enable={true}
          btnname={
            <i
              className="fa fa-question text-primary text-3xl"
              aria-hidden="true"
            ></i>
          }
        >
          Fuck around and find out fool
        </Modal>
      </div>
    </div>
  );
}

export default page;