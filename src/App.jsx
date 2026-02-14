import { useState } from "react";
import "./App.css";

export default function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const phrases = [
    "No",
    "You sure?",
    "Like… 100% sure?",
    "Inti don’t do me like that 😭",
    "I said flowers though 💐",
    "EP2 was literally for us…",
    "Story of Omar too??",
    "Okay wow 😔",
    "So… what happened to NBA kids?? 🏀😭",
    "I wanted us exclusive by spring 😭",
    "Married by year end was the plan btw…",
    "Alright I’m done asking 😭🤍",
  ];

  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  return (
    <div className="valentine-container">
      {!yesPressed ? (
        <>
          <img
            className="valentine-gif"
            alt="cute gif"
            src="https://media.tenor.com/0AVbKGY_MxMAAAAi/bear-hug-love.gif"
          />

          <h1 className="valentine-text">Inti… will you be my Valentine? 💌</h1>

          <div className="buttons">
            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button className="no-button" onClick={handleNoClick}>
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            className="valentine-gif"
            alt="happy gif"
            src="https://media.tenor.com/0AVbKGY_MxMAAAAi/bear-hug-love.gif"
          />
          <h1 className="valentine-text">
            Okay yayyy 😭💐 <br />
            Flowers + EP2 + Story of Omar loading… 🤍
          </h1>
        </>
      )}
    </div>
  );
}

