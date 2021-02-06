import React, { useState } from 'react';
import './Cards.scss';
import { Card } from '../card/Card';
import { Enrollment } from '../enrollment/Enrollment';

const cards = [
  {id: 1, fill: 'Пополнить на', moneyFill: 50, get: 'Получить'},
  {id: 2, fill: 'Пополнить на', moneyFill: 100, get: 'Получить'},
  {id: 3, fill: 'Пополнить на', moneyFill: 500, get: 'Получить'}
];

export const Cards = ({ payMethod }) => {
  const [cardId, setCardId] = useState(0);
  // const [cardChosen, setCardChosen] = useState(false);


  // let renderedId = cardId;
  // const chosenCard = cards.find(card => card.id === cardId);


  return (
    <div className="cards">
      <div className="cards__wrapper">
        {cards.map((card) => (
          <div key={card.id} className="cards__card"> 
            <Card {...card} id={card.id} setCardId={setCardId} cardId={cardId} />
          </div>
        ))}
      </div>
      
      <div>
        {cardId !== 0 && <Enrollment payMethod={payMethod} cardId={cardId} cards={cards}/>}
      </div>
    </div>
  )
}