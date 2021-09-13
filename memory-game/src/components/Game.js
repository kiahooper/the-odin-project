import React, { useState, useEffect } from "react";
import Cards from "./Cards.js";
import Scoreboard from "./Scoreboard.js";

import c1 from "../styles/media/cards/avocado.png";
import c2 from "../styles/media/cards/banana.png";
import c3 from "../styles/media/cards/coconut.png";
import c4 from "../styles/media/cards/guava.png";
import c5 from "../styles/media/cards/limon.png";
import c6 from "../styles/media/cards/mango.png";
import c7 from "../styles/media/cards/papaya.png";
import c8 from "../styles/media/cards/passionfruit.png";
import c9 from "../styles/media/cards/pineapple.png";
import c10 from "../styles/media/cards/pitaya.png";
import c11 from "../styles/media/cards/pomegranate.png";
import c12 from "../styles/media/cards/starfruit.png";
import c13 from "../styles/media/cards/tamarillo.png";
import c14 from "../styles/media/cards/uchuva.png";

const Game = () => {

    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const availableCards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];
    
    function checkSelectedCards(e) {
        const selectedCard = e.target.alt;
        if (selectedCards.indexOf(selectedCard) === -1) {
            setSelectedCards(selectedCards.concat(selectedCard));
            setScore(score+1);
        } else {
            setSelectedCards([]);
            setScore(0);
        }
    }

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
    }, [score, bestScore]);
    
    return (
        <div id="scoreboard_cards">
            < Scoreboard score={score} bestScore={bestScore}/>
            < Cards availableCards={availableCards} checkSelectedCards={checkSelectedCards} selectedCards={selectedCards}/>
        </div>
    )

}
export default Game;
