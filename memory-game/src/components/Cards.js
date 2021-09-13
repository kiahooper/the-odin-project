import React, { useState, useEffect } from "react";
import '../styles/Cards.css';

const Cards = (props) => {
    
    const [cards, setCards] = useState([]);
    const {availableCards, checkSelectedCards, selectedCards} = props;
    
    useEffect(() => {
        const randomCards = [];
        while (randomCards.length < 9) {
            let card = availableCards[Math.floor(Math.random()*availableCards.length)]; 
            if (randomCards.indexOf(card) === -1) {
                randomCards.push(card);
            }
        }   
        setCards(randomCards);
    }, [selectedCards, availableCards]);
    

  return (
      <div id="card_container">
          {cards.map(card => {
              return (
                <div class="cards" onClick={(e) => checkSelectedCards(e)}>
                    <img src={card} alt={card.split("").slice(14, card.length-13).join("")}/>
                </div>
              )
          })}
      </div>
  );
};

export default Cards;
