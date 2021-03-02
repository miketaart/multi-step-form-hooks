import React from 'react';
//import ButtonNext from '../buttons/ButtonNext';
import ButtonNextHooks from '../buttons/ButtonNextHooks';
import Typist from 'react-typist';

const Size = (props) => {
  return (
    <div className="Question">
      <label><Typist>Hoeveel ruimte heb je thuis voor mij?</Typist></label>

      <select
        size="1"
        className="form"
        onChange={props.handleChange}
        defaultValue={props.filter}
      >
        <option value='' disabled>kies</option>
        <option value="small">Ik leef klein en knus</option>
        <option value="large">Zoveel als je maar wil!</option>
      </select>

      <ButtonNextHooks
        filter={props.filter}
        nextQuestion={props.nextQuestion}
      />
    </div>
  );
}

export default Size;

