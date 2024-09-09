import { useState } from "react";
import Game from "@/gameui/Game";
import MainMenu from "./gameui/MainMenu";

function App() {
  const [gamestate, setGamestate] = useState(true);

  const startGame = () => {
    setGamestate(false);
  };
  return <>{gamestate ? <MainMenu startGame={startGame} /> : <Game />}</>;
}

export default App;
