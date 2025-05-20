import React, { useState } from 'react';

const Rock = 0;
const Paper = 1;
const Scissor = 2;

const App = () => {
  const [gameState, setGameState] = useState("Start");
  const [opponentChoice, setOpponentChoice] = useState(null);

  function randomizer(value) {
    const random = Math.floor(Math.random() * 3);
    setOpponentChoice(random);

    if (value === random) {
      setGameState("Draw");
    } else if (
        (value === Rock && random === Scissor) ||
        (value === Paper && random === Rock) ||
        (value === Scissor && random === Paper)
    ) {
      setGameState("Win");
    } else {
      setGameState("Lost");
    }
    console.log(GameState)
  }

  function FinalMsg() {
    if (gameState === "Win") return <h2 className="text-green-600">You Have Won! 😒😒</h2>;
    if (gameState === "Lost") return <h2 className="text-red-600">You Have Lost 🤣😂</h2>;
    if (gameState === "Draw") return <h2 className="text-yellow-600">Draw 😁😁</h2>;
    return null;
  }

  function choiceToText(choice) {
    if (choice === Rock) return "Rock";
    if (choice === Paper) return "Paper";
    if (choice === Scissor) return "Scissor";
    return "";
  }

  return (
      <div>
        <h1 className="text-center pb-[80px] pt-[30px] font-bold">Play Rock,Paper,Scissors against me !  Select an action</h1>
        <ul className="grid grid-cols-3 gap-4 place-items-center">
          <li>
            <img className="h-[150px] w-[150px]" src="https://img.freepik.com/free-psd/hand-expression-icon-isolated_23-2151172315.jpg" alt="Rock" />
            <button className="bg-blue-600 w-[80px] h-[45px] ml-[45px] rounded-[15px] text-white"
                    onClick={() => randomizer(Rock)}>Rock</button>
          </li>
          <li>
            <img className="h-[120px] w-[120px]" src="https://i.pinimg.com/736x/90/a8/88/90a888ea2620848e039602fc70b8fdcc.jpg" alt="Paper"/>
            <button className="bg-blue-600 w-[80px] h-[45px] ml-[15px] rounded-[15px] text-white mt-[30px]"
                    onClick={() => randomizer(Paper)}>Paper</button>
          </li>
          <li>
            <img className="h-[130px] w-[130px]" src="https://i.pinimg.com/736x/44/4a/c1/444ac127740b7b46f1bce265fb4c9767.jpg" alt="Scissor"/>
            <button className="bg-green-500 w-[80px] h-[45px] rounded-[15px] ml-7 mt-6 text-white"
                    onClick={() => randomizer(Scissor)}>Scissor</button>
          </li>
        </ul>

        <div className="text-center mt-10">
          {gameState !== "Start" && (
              <>
                <FinalMsg />
                <p>Opponent chose: <strong>{choiceToText(opponentChoice)}</strong></p>
              </>
          )}
        </div>
      </div>
  );
};

export default App;
