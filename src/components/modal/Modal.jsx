import React, { useState } from 'react';
import './Modal.scss';
import { Timer } from '../timer/Timer';
import { Cards } from '../cards/Cards';

export const Modal = ({ setShowModal }) => {
  const [payMethod, setPayMethod] = useState("card");
  const [payIcon, setPayIcon] = useState("../../../bank-card-img.svg")

  const iconChanger = (value) => {
    switch (value) {
      case 'card':
        return "../../../bank-card-img.svg";
      case 'bitcoin':
        return "../../../bitcoin-1.svg";
      case 'bill':
        return "../../../bill.svg";
      default :
       return "../../../bank-card-img.svg";
    }
  }

  return (
  
    <div className="modal">
      <div className="modal__percent">+100%</div>
      <button 
        onClick={() => {
          setShowModal(false)
        }}
        className="modal__close" 
        type="button"
      ></button>
      <div className="modal__timer">
        <Timer />
      </div>
      <h2 className="modal__heading">Увеличьте свой депозит!</h2>
      <div className="modal__select-wrapper">
        <img
          src={iconChanger(payIcon)}
          alt=""
          className={`modal__img ${payMethod === "bitcoin"
            ? "modal__img--transformed" 
            : "" 
            }`}
        />
        <select
          className="modal__select"
          value={payMethod}
          onChange={({target}) => {
            setPayMethod(target.value);
            setPayIcon(target.value)
          }}
        >
          <option value="card" className="modal__select-option">Банковская карта</option>
          <option value="bitcoin" className="modal__select-option">Биткоин</option>
          <option value="bill" className="modal__select-option">Выставить счет</option>
        </select>
        <img className="modal__arrow" src="../../../arrow.svg" alt=""/>
      </div>
      <div className="modal__cards">
        <Cards payMethod={payMethod}/>
      </div>
      
      <div className="modal__bottom">
        <p className="modal__info">
          При пополнении счета с банковской карты
          списание средств происходит по курсу банка клиента
        </p>
        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a className="modal__link" href="#">подробнее</a>
        
      </div>

    </div>
  );
}