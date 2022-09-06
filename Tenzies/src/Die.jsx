import React from "react";

export default function Die(props){
    const styles = {
        backgroundColor: props.property.isHeld ? "#59E391" : "white"
    }
    return (
        <div className= "die" style={styles}>
            <p>{props.property.value}</p>
        </div>
    )
}