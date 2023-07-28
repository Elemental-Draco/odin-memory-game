import React from "react";
import Scoring from "./components/Scoring";

function App() {
  const [allCards, setAllCards] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [level, setLevel] = React.useState(1);
  const [memeArray, setMemeArray] = React.useState([]);

  async function getMemes() {
    const memes = await fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => data.data.memes);
    return memes;
  }

  React.useEffect(() => {
    setMemeArray(getMemes());
  }, []);

  console.log(memeArray);

  return <Scoring score={score} bestScore={bestScore} level={level} />;
}

export default App;
