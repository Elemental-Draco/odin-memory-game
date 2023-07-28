import React from "react";

export default function Scoring(props) {
  // calculate current score
  // display best score
  // display current level

  const styles = {
    backgroundColor: "rgb(54, 232, 255)",
    fontSize: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px 0",
  };

  return (
    <header style={styles}>
      <p>Score: {props.score}</p>
      <p>Level {props.level}</p>
      <p>Best: {props.bestScore}</p>
    </header>
  );
}
