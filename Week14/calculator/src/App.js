import './App.css';
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import React, { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function deleteUser(id){
  return $.ajax({
    url: `${66c6768a134eb8f43497a981.mockapi.io/finalproj/users}$parseInt(id.id)`},
    type: "DELETE",
  })
}

function App() {

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    console.log(value);

      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0" ? "0"
          : calc.num % 1 === 0 
          ? Number(calc.num + value) : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
  };

  const commaClickHandler = (e) => {
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    })
  }

  const equalsClickHandler = () => {
    if(calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
          ? "Can't divide by zero you knucklehead."
          : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      })
    }
  };

  const signClickHandler = (e) => {
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "-",
      num: 0,
      res: 0,
    });
  };

  return (
    <div className="App">
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
              return (
                <Button
                key={i}
                className={btn === "=" ? "equals" : ""} // come back to this 
                value={btn}
                onClick={
                  btn ==="C"
                    ? resetClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn ==="/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }
                />
              );
            })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
