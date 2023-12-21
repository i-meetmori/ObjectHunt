import ConfettiExplosion from "react-confetti-explosion";

import React, { useState } from "react";

const smallProps = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};

const mediumProps = {
  force: 0.6,
  duration: 2500,
  particleCount: 100,
  width: 1000,
  colors: ["#9A0023", "#FF003C", "#AF739B", "#FAC7F3", "#F7DBF4"],
};

const largeProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 300,
  width: 1600,
  colors: ["#041E43", "#1471BF", "#5BB4DC", "#FC027B", "#66D805"],
};

const Confetti = () => {
  const [isSmallExploding, setIsSmallExploding] = useState(false);
  const [isMediumExploding, setIsMediumExploding] = useState(false);
  const [isLargeExploding, setIsLargeExploding] = useState(false);
  return (
    <>
      <div className="flex flex-col overflow-none justify-center">
        <button
          className="btn cartoonish-btn"
          onClick={() => setIsSmallExploding(!isSmallExploding)}
        >
          {isSmallExploding && <ConfettiExplosion {...smallProps} />}
          small
        </button>

        <button
          className="btn cartoonish-btn"
          onClick={() => setIsMediumExploding(!isMediumExploding)}
        >
          {isMediumExploding && <ConfettiExplosion {...mediumProps} />}
          medium
        </button>

        <button
          className="btn cartoonish-btn"
          onClick={() => setIsLargeExploding(!isLargeExploding)}
        >
          {isLargeExploding && <ConfettiExplosion {...largeProps} />}
          large
        </button>
      </div>
    </>
  );
};
export default Confetti;
