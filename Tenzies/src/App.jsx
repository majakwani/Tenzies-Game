import React from "react";
import Die from "./Die";
import Top from "./Top";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";


export default function App(){
  const [dice, setDice] = React.useState(allNewNumbers())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=> {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allValue = dice.every(die => die.value === firstValue)

    if(allHeld && allValue){
      setTenzies(true)
    }
    }
  , [dice])

  function allNewNumbers(){
    const numberArr = []
    for(let i = 0; i < 10; i++){
      numberArr.push({
        value: Math.floor(Math.random() *6) + 1,
        isHeld: false, 
        id: nanoid()
      })
  }
  return numberArr
  }
  
  function generateNewDie(){
    return {
      value: Math.floor(Math.random() *6) + 1,
      isHeld: false,
      id: nanoid() 
    }
  }

  function handleEvent(){
    if(tenzies){
    setTenzies(false)
    setDice(allNewNumbers())
    }
    else{
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? 
      die :
      generateNewDie()
    }))
  }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? 
      {...die, isHeld: !die.isHeld} :
      die
    }))
    }

  const diceElements = dice.map((die) => {
    return <Die 
    value = {die.value}
    isHeld = {die.isHeld}
    key = {die.id}
    id = {die.id}
    toggler = {holdDice} />
  })


  return (
    <main className="game">
      
      <Top />

      <div className="dieContainer">
      {tenzies &&
       <Confetti width = {1920} height = {929} />
       }
        {diceElements}
      </div>

      <button type="button" onClick={handleEvent}>{tenzies ? "New Game" : "Roll"}</button>

    </main>
  )
}