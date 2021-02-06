import React from 'react';
import './Enrollment.scss';


export const Enrollment = ({ cards, cardId, payMethod }) => {
  const showCardData = cards.find(card => card.id === cardId);
  console.log(showCardData);
  const money = showCardData.moneyFill*3;

  const cardAlert = `You have chosen card pay method. $${money} will be credited to your account.`

  const bitcoinAlert = `You have chosen bitcoin pay method. $${money} will be credited to your account.`

  const checkAlert = `You have chosen check pay method. $${money} will be credited to your account.`

  const showAlert = () => {
    switch(payMethod) {
      case 'card':
        alert (cardAlert);
        break;
      case 'bitcoin':
        alert (bitcoinAlert);
        break;
      case 'bill':
        alert (checkAlert);
        break;
      default: return;
    }
  }
  
  return (
    <>
      <div className="enrollment">
        <p className="enrollment__text">
          <span className="enrollment__text--big-colored">
            {`$${showCardData.moneyFill*3}`}
          </span>
          <span className="enrollment__text--small-colored">,00 </span>
          <span className="enrollment__text--regular"> 
            будет зачислено вам на счет
          </span>
        </p>
        <button
          onClick={() => showAlert()}
          className="enrollment__button"
          type="button"
        >Пополнить
        </button>
      </div>
    </>
  )
}