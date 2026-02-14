import { useState } from "react";
import "./App.css";

export default function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [stage, setStage] = useState(0);
  const [noCount, setNoCount] = useState(0);

  // NO button phrases
  const phrases = [
    "HELL NO",
    "You sure?? 😭",
    "Inti don’t do me like that 🥲",
    "So what happened to NBA kids?? 🏀😂",
    "What happened to getting you out the snow? ❄️😮‍💨",
    "Or we build snowmans together?? ⛄️😭",
    "We can witness a ring together before the Cowboys 😭💍⭐️",
    "EP2: The Journey of Omar too?? 📺😂",
    "Okay wow 😭",
    "Alright I’m hurt 🥲",
    "Last chance 😭",
  ];

  const getNoText = () => phrases[Math.min(noCount, phrases.length - 1)];

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    if (stage === 0) setStage(1);
    else if (stage === 1) setStage(2);
    else setYesPressed(true);
  };

  const getYesText = () => {
    if (stage === 0) return "Hey Inti, will you be my Valentine? 💌";
    if (stage === 1) return "So you’re saying I’m your first & only Valentine? 👀💐";
    return "This means we’re exclusive then? 😭🤝🏾";
  };

  return (
    <div className="valentine-container">
      {!yesPressed ? (
        <>
          <h1 className="valentine-text">{getYesText()}</h1>

          <div className="buttons">
            <button className="yes-button" onClick={handleYesClick}>
              YEE
            </button>

            <button className="no-button" onClick={handleNoClick}>
              {getNoText()}
            </button>
          </div>

          <p className="hint">(Be honest 😭)</p>
        </>
      ) : (
        <>
          <h1 className="valentine-text">
            Okkayyy we locked in 😭 <br />
            Flowers + EP2: The Journey of Omar 💐📺
          </h1>

          <p className="final-note">Screenshot this so you don’t switch up later 😭</p>
        </>
      )}
    </div>
  );
}
