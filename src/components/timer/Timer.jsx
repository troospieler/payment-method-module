import React from 'react';

import './Timer.scss';

export const Timer = ({secs, mins}) => {

  return (

    <div className="timer">
      <img className="timer__icon" src="./images/timer.svg" alt=""/>

      <div className="timer__digits-wrapper">
        <p className="timer__hours">&nbsp;00:</p>
        <p className="timer__minutes">
          {mins < 10 ? `0${mins}:` : `${mins}:`}
        </p>
        <p className="timer__seconds">
          {secs < 10 ? `0${secs}` : `${secs}`}
        </p>

      </div>
    </div>
  );
}
