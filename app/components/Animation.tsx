import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const mediumProps = {
  force: 0.6,
  duration: 2500,
  particleCount: 100,
  width: 1000,
  colors: ["#9A0023", "#FF003C", "#AF739B", "#FAC7F3", "#F7DBF4"],
};

interface Props {
  doExplode: boolean;
}

function Animation(props: Props) {
  const [isExploding, setIsExploding] = useState(false);

  // Function to start the ConfettiExplosion
  const startConfetti = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, mediumProps.duration);
  };

  useEffect(() => {
    startConfetti();
  }, [props.doExplode]);

  return isExploding && <ConfettiExplosion {...mediumProps} />;
}

export default Animation;
