import React, { useState } from 'react'
import right_arrow from '../../assets/right-arrow.svg';

const ButtonNextHooks = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);

  const next = e => {
    e.preventDefault();
    if (props.filter !== '') {
      props.nextQuestion();
      setErrorMessage(false)
    } else {
      setErrorMessage(true)
    }
  };

  if (errorMessage) {
    return (
      <div className="Btn__Container">
        <button className="Btn" onClick={next}>
          Volgende <img src={right_arrow} alt="arrow_right" />
        </button>
        <p className="Btn__Error">Wil je alsjeblieft nog een keuze maken :)</p>
      </div>
    )
  } else {
    return (
      <button className="Btn" onClick={next}>
        Volgende <img src={right_arrow} alt="arrow_right" />
      </button>
    )
  }
}

export default ButtonNextHooks