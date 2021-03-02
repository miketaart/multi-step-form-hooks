import React from 'react';
import left_arrow from '../../assets/left-arrow.svg';
const ButtonPrev = (props) => {

  const back = e => {
    e.preventDefault();
    props.prevQuestion();
  };
  return (
    <button className="Btn" onClick={back}>
      <img src={left_arrow} alt="left-arrow" /> Terug
    </button>
  );
}

export default ButtonPrev;