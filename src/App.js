import React, { useState } from "react";
import './App.css'

export default function App() {

  function Button({ isLocked, children, ...other }) {
    const className = isLocked ? "button button--locked" : "button";
    return (
      <button class={className} disabled={isLocked} {...other}>
        {isLocked ? "Oh no! I'm locked :(" : children}
      </button>
    );
  }

  const [isLocked, setIsLocked] = useState(true);
  const unlockSecondButton = () => {
    // unlock second button on click
    console.log('Click happened')
    setIsLocked(!isLocked);
  };

  const [countdown, setCountdown] = useState(5)
  const [isLocked2, setIsLocked2] = useState(true);
  const unlockThirdButton = () => {
    // unlock third button after 5 clicks
    if (countdown > 1) {
      setCountdown(countdown - 1)
    } else {
      setIsLocked2(!isLocked2)
    }

  };
  let word = "clikcs"
  if (countdown === 1) {
    word = "click"
  }

  return (
    <div className="main-containter">
      <div className="button-wrapper">
        <Button onClick={unlockSecondButton}>
          I will unlock Second Button on click
        </Button></div>
      <div className="button-wrapper">
        <Button onClick={unlockThirdButton} isLocked={isLocked}>
          I will unlock Third Button after {countdown} {word}
        </Button></div>
      <div className="button-wrapper">
        <Button isLocked={isLocked2}>Yay I'm free! :)</Button>
      </div>
    </div>
  );
}