import React, { Component } from 'react'
import right_arrow from '../../assets/right-arrow.svg';

export default class ButtonNext extends Component {
  state = {
    errorMessage: false
  }
  next = e => {
    e.preventDefault();
    if (this.props.filter !== '') {
      this.props.nextQuestion();
      this.setState({ errorMessage: false })
    } else {
      this.setState({ errorMessage: true })
    }
  };

  render() {
    if (this.state.errorMessage) {
      return (
        <div className="Btn__Container">
          <button className="Btn" onClick={this.next}>
            Volgende <img src={right_arrow} alt="arrow_right" />
          </button>
          <p className="Btn__Error">Wil je alsjeblieft nog een keuze maken :)</p>
        </div>
      )
    } else {
      return (
        <button className="Btn" onClick={this.next}>
          Volgende <img src={right_arrow} alt="arrow_right" />
        </button>
      )
    }
  }
}
