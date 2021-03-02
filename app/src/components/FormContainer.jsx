import React, { Component } from 'react'
import axios from "axios";
import Size from "../components/questions/Size"
import Maintenance from "../components/questions/Maintenance"
import WaterAmount from "../components/questions/WaterAmount"
import AllPlants from "../components/AllPlants"

export default class FormContainer extends Component {
  state = {
    currentQuestion: 1,
    collection: [],
    size: '',
    maintenance: '',
    waterAmount: '',
  }

  componentDidMount() {
    this.getPlantCollection()
  }

  getPlantCollection = async () => {
    try {
      // fetch plant collection from server
      let response = await axios.get(`http://localhost:5000/`);
      let collection = response.data
      this.setState({ collection: collection })
    } catch (error) {
      console.log("error", error);
    }
  }

  // Go to next question/step
  nextQuestion = () => {
    const { currentQuestion } = this.state;
    this.setState({
      currentQuestion: currentQuestion + 1
    });
  };

  // Go back to previous question/step
  prevQuestion = () => {
    const { currentQuestion } = this.state;
    this.setState({
      currentQuestion: currentQuestion - 1
    });
  };

  // Handle option select change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { currentQuestion, size, maintenance, waterAmount } = this.state;
    const values = { size, maintenance, waterAmount };

    if (currentQuestion === 1) {
      return (
        <div className="FormContainer">
          <Size
            nextQuestion={this.nextQuestion}
            handleChange={this.handleChange}
            filter={size}
          />
        </div>
      )
    } else if (currentQuestion === 2) {
      return (
        <div className="FormContainer">
          <Maintenance
            prevQuestion={this.prevQuestion}
            nextQuestion={this.nextQuestion}
            handleChange={this.handleChange}
            filter={maintenance}
          />
        </div>
      )
    } else if (currentQuestion === 3) {
      return (
        <div className="FormContainer">
          <WaterAmount
            prevQuestion={this.prevQuestion}
            nextQuestion={this.nextQuestion}
            handleChange={this.handleChange}
            filter={waterAmount}
          />
        </div>
      )
    } else {
      return (
        <div className="FormContainer">
          <AllPlants
            prevQuestion={this.prevQuestion}
            filter={values}
            collection={this.state.collection}
          />
        </div>
      )
    }
  }
}
