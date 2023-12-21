"use client";

import { createContext, useContext, useState } from "react";

import BGMusic from "../components/BGMusic";

const GlobalContext = createContext<any>({
  ...({} as any),
});

export const GlobalContextProvider = ({ children }: any) => {
  // Game State
  const remainingState = useState(10);
  const scoreState = useState(5);
  const roundState = useState(3);

  const tabState = useState(0);

  // Object Detection
  const isSubmitingState = useState(false);
  const matchedState = useState(-1);

  // User State
  const username = "soham";
  // const username = window.localStorage.getItem("username") || "unknown";
  const [_BGMusic, _setBGMusic] = useState(true);
  const BGMusicState = {
    state: _BGMusic,
    toggle: () => {
      _setBGMusic(!_BGMusic);
      // window.localStorage.setItem("bgMusic", _BGMusic.toString());
    },
  };

  const restartGame = () => {
    remainingState[1](10);
    // roundState[1](3);
    isSubmitingState[1](false);
    matchedState[1](-1);
  };

  return (
    <GlobalContext.Provider
      value={{
        remainingState,
        scoreState,
        roundState,
        isSubmitingState,
        matchedState,
        tabState,
        restartGame,
        username: username,
        BGMusicState,
      }}
    >
      <BGMusic state={BGMusicState.state} />
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
