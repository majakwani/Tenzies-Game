import React from "react";

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div onClick={() => props.toggler(props.id)} className= "die" style={styles}>
            <p>{props.value}</p>
        </div>
    )
}