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
    async function fetchMemes() {
      const memes = await getMemes();
      setMemeArray(memes);
    }
    fetchMemes();
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createCards() {
    let tempCards = [];
    let k = 0;

    let howMany = level + 3;
    while (k < howMany) {
      k++;
      let randNum = Math.floor(Math.random() * 100);
      tempCards.push(memeArray[randNum]);
    }
    setAllCards(tempCards);
  }

  React.useEffect(() => {
    createCards();
  }, [level]);

  console.log(allCards);

  return <Scoring score={score} bestScore={bestScore} level={level} />;
}

export default App;
