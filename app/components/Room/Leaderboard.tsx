"use client";

// import { useGlobalContext } from "@/app/Context/store";
import React, { useEffect } from "react";

interface Props {
  data: any[];
}

function Leaderboard(props: Props) {
  const curPlayer = 0;

  // const [leaderboard, setLeaderboard] = dat;

  useEffect(() => {
    // setPlayers(...players, [{ name: "soham", score: 200 }, { name: "vineet", score: 100 }]);
    // console.log(players);
  }, []);

  // for (const name in props.players[0]) {
  //     players.push(name);
  // }

  // props.players[0].map((player: string, idx: React.Key) => {
  //     players.push(player);
  // });

  return (
    <div className="overflow-x-scroll rounded bg-base-200 m-1 mt-2 nobar lg:h-40 sm:h-72">
      <table className="table center border-separate bg-base-200 p-1 rounded-lg table-pin-rows">
        <thead>
          <tr>
            <th className="text-primary font-semibold">#</th>
            <th className="text-primary font-semibold">Name</th>
            <th className="text-primary font-semibold">Score</th>
          </tr>
        </thead>
        <tbody>
          {props.data && Object.entries(props.data).map(([key, player], idx) => (
            <tr
              key={idx}
              className={(idx === curPlayer && `bg-primary text-black`) || ""}
            >
              <td>{idx + 1}</td>
              {player?.name ? <td>{player?.name}</td> : <td>---</td>}
              {<td>{player?.score}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
