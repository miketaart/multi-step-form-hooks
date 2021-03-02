import React from 'react';
import ButtonPrev from '../buttons/ButtonPrev'
//import ButtonNext from '../buttons/ButtonNext'
import ButtonNextHooks from '../buttons/ButtonNextHooks';
import Typist from 'react-typist';

const WaterAmount = (props) => {
  return (
    <div className="Question">
      <label><Typist>Ik hou van drinken, is dat oke?</Typist></label>

      <select
        size="1"
        className="form"
        onChange={props.handleChange}
        defaultValue={props.filter}
      >
        <option value='' disabled>kies</option>
        <option value="low">Ik zoek helaas een Bob</option>
        <option value="high">Drinking all day everyday!</option>
      </select>

      <div className="Btn__Wrapper">
        <ButtonPrev
          filter={props.filter}
          prevQuestion={props.prevQuestion}
        />
        <ButtonNextHooks
          filter={props.filter}
          nextQuestion={props.nextQuestion}
        />
      </div>
    </div>
  );
}

export default WaterAmount;

