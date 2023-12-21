// import React, { useState } from "react";
// import Chat from "../components/Room/Chat";
// import Leaderboard from "../components/Room/Leaderboard";
// import Capture from "../components/Room/Capture";
// import { useGlobalContext } from "../Context/store";
// import { Bungee } from "next/font/google";

// interface Props {
//   leaderboard: any[];
  
//   msg: string;
//   msgs: { username: string; message: string }[];
//   setMsg: (msg: string) => void;
//   sendMsg: () => void;

//   submitImage: (imgData?: string) => void;
// }
// const font = Bungee({
//   weight: "400",
//   subsets: ["latin"],
// });

// interface ChatProps {
  
// }

// const TabManager = (props: Props) => {
//   const { tabState } = useGlobalContext();
//   const [activeTab, setActiveTab] = tabState;

//   return (
//     <>
//       <Capture submitImage={props.submitImage} />
//       <div className="tabs tabs-boxed m-1 mt-1.5">
//         <a
//           className={
//             (activeTab == 0 && `tab-active tab w-1/2 ${font.className}`) ||
//             `tab w-1/2 ${font.className}`
//           }
//           onClick={() => setActiveTab(0)}
//         >
//           Chat
//         </a>
//         <a
//           className={
//             (activeTab == 1 && `tab-active tab w-1/2 ${font.className}`) ||
//             `tab w-1/2 ${font.className}`
//           }
//           onClick={() => setActiveTab(1)}
//         >
//           Leaderboard
//         </a>
//       </div>

//       {activeTab == 0 && (
//         <Chat
//           msg={props.msg}
//           msgs={props.msgs}
//           setMsg={props.setMsg}
//           sendMsg={props.sendMsg}
//         />
//       )}
//       {activeTab == 1 && <Leaderboard data={props.leaderboard} />}
//     </>
//   );
// };

// export default TabManager;
