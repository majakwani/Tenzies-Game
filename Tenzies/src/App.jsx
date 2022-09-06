import React from "react";
import Die from "./Die";
import Top from "./Top";



export default function App(){
  const [dice, setDice] = React.useState(allNewNumbers())

  function allNewNumbers(){
    const numberArr = []
    for(let i = 0; i < 10; i++){
      numberArr.push({
        value: Math.floor(Math.random() *6) + 1,
        isHeld: false 
      })
  }
  return numberArr
  }
  
  function handleEvent(){
    setDice(allNewNumbers())
  }

  const diceElements = dice.map((die) => {
    return <Die 
    property = {die} />
  })


  return (
    <main className="game">
      
      <Top />

      <div className="dieContainer">
        {diceElements}
      </div>

      <button type="button" onClick={handleEvent}>Roll</button>

    </main>
  )
}