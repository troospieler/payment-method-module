import React from 'react';

import './Timer.scss';

export const Timer = ({time}) => {

  return (

    <div className="timer">
      <img className="timer__icon" src="./images/timer.svg" alt=""/>

      <div className="timer__digits-wrapper">
        <p className="timer__hours">00:</p>
        <p className="timer__minutes">
          {time.m < 10 ? `0${time.m}:` : `${time.m}:`}
        </p>
        <p className="timer__seconds">
          {time.s < 10 ? `0${time.s}` : `${time.s}`}
        </p>

      </div>
    </div>
  );
}
