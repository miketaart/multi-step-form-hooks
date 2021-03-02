import React from 'react';
import ButtonPrev from '../buttons/ButtonPrev'
//import ButtonNext from '../buttons/ButtonNext'
import ButtonNextHooks from '../buttons/ButtonNextHooks'
import Typist from 'react-typist';

const Maintenance = (props) => {
  return (
    <div className="Question">
      <label><Typist>Van plan(t) mij veel liefde te geven?</Typist></label>

      <select
        size="1"
        className="form"
        onChange={props.handleChange}
        defaultValue={props.filter}
      >
        <option value='' disabled>kies</option>
        <option value="easy">ik zoek een independent plant</option>
        <option value="hard">I will love you to the moon and back</option>
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

export default Maintenance;
