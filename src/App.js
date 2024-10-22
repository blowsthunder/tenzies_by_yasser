import React from "react";

export default function App(props) {
  const [winner, setWinner] = React.useState("Playing");
  const [status, setStatus] = React.useState("roll");
  const [buttonClicked, setButtonClicked] = React.useState(0);
  const [chosenNumber, setChosenNumber] = React.useState("-");
  const [dataButton, setDataButton] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const [valueButton, setValueButton] = React.useState({
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  });

  const [matchingButtons, setMatchingButtons] = React.useState(0);

  React.useEffect(() => {
    checkIfPlayerWon();
  }, [valueButton]);

  function changeValue() {
    if (status === "Play Again") {
      // Reset the game state when the player has won and clicks "Roll" again
      setButtonClicked(0);
      setChosenNumber("-");
      setDataButton({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
      });
      setValueButton({
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      });
      setStatus("roll");
      setWinner('playing')
    }

    // Reset the count of matching buttons when rolling again
    setMatchingButtons(0);

    setValueButton((prevValue) => {
      const newValue = {};
      for (var i = 0; i <= 9; i++) {
        dataButton[i] ? (newValue[i] = prevValue[i]) : (newValue[i] = Math.round(Math.random() * 10))
      ;
      }
      return newValue;
    });
  }

  function handleChange(event) {
    if (chosenNumber === "-") {
      setChosenNumber(event.target.value);
    }

    const { name } = event.target;

    // Check if the button is already clicked before updating dataButton
    if (!dataButton[name]) {
      setButtonClicked((prev) => (prev === 10 ? prev : prev + 1));
      setDataButton((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });
    }
  }

  function displayColor(id, value) {
    return {
      backgroundColor: dataButton[id] ? value : "initial",
    };
  }

  function checkIfPlayerWon() {
    let matchingButtonsCount = 0;
    for (let i = 0; i <= 9; i++) {
      if (dataButton[i] && valueButton[i] === Number(chosenNumber)) {
        matchingButtonsCount++;
      } else {
        setDataButton((prev) => {
          return {
            ...prev,
            [i]: false,
          };
        });
      }
    }

    setMatchingButtons(matchingButtonsCount);

    if (matchingButtonsCount === 9) {
      setWinner("You won");
      setStatus("Play Again");
    }
  }

  console.log(dataButton);

  return (
    <div className="app-background">
      <div className="app">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <h3>{winner}</h3>
        <div className="app-button">
          <div className="pad1">
            <input style={displayColor(0, "green")} type="button" value={valueButton[0]} name="0" onClick={handleChange} />
            <input style={displayColor(1, "green")} type="button" value={valueButton[1]} name="1" onClick={handleChange} />
            <input style={displayColor(2, "green")} type="button" value={valueButton[2]} name="2" onClick={handleChange} />
            <input style={displayColor(3, "green")} type="button" value={valueButton[3]} name="3" onClick={handleChange} />
            <input style={displayColor(4, "green")} type="button" value={valueButton[4]} name="4" onClick={handleChange} />
          </div>
          <div className="pad2">
            <input style={displayColor(5, "green")} type="button" value={valueButton[5]} name="5" onClick={handleChange} />
            <input style={displayColor(6, "green")} type="button" value={valueButton[6]} name="6" onClick={handleChange} />
            <input style={displayColor(7, "green")} type="button" value={valueButton[7]} name="7" onClick={handleChange} />
            <input style={displayColor(8, "green")} type="button" value={valueButton[8]} name="8" onClick={handleChange} />
            <input style={displayColor(9, "green")} type="button" value={valueButton[9]} name="9" onClick={handleChange} />
          </div>
        </div>
        <p>button clicked : {buttonClicked}</p>
        <p>Chosen Number :{chosenNumber}</p>
        <button onClick={changeValue}>{status}</button>
      </div>
    </div>
  );
}
