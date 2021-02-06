import React, { useState } from 'react';
import './Card.scss';
import classNames from 'classnames';

export const Card = ({fill, moneyFill, get, id, setCardId, cardId }) => {
  const [cardChosen, setCardChosen] = useState(false);
  const moneyGet = moneyFill * 2
  const buck = '$ '

  return (
    <div
      id={id}
      onClick={() => {
        setCardId(id);
        setCardChosen(!cardChosen);
      }}
      // className={classNames('card', { chosen: cardChosen })}
      className={classNames('card', { chosen: id === cardId })}
      
    >

      <div className="card__regular-text">
        <span className="card__fill">{fill}</span>
        <span className="card__money-fill">{`${buck}${moneyFill}`}</span>
      </div>

      <div className="card__color-text">
        <span className="card__get">{get}</span>
        <span className="card__money-get">{`${buck}${moneyGet}`}</span>
      </div>

      <div>
        <img 
          className={classNames('card__ellipse', {
            "card__ellipse--chosen": id === cardId 
          })}
          alt="" 
          src={id !== cardId 
            ? "./images/ellipse-inactive.svg" 
            : "./images//ellipse-active.svg"
          }
        />
      </div>

    </div>
  )
} 