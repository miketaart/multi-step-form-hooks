import React, { useState, useEffect } from 'react'
import axios from "axios";
import Size from "../components/questions/Size"
import Maintenance from "../components/questions/Maintenance"
import WaterAmount from "../components/questions/WaterAmount"
import AllPlants from "../components/AllPlants"

const FormContainerHooks = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [collection, setCollection] = useState([]);
  const [properties, setProperties] = useState({size: '', maintenance: '', waterAmount: ''});

  useEffect(() => {
    async function getPlantCollection() {
      // fetch plant collection from server
      const response = await axios.get(`http://localhost:5000/`);
      let collection = response.data
      setCollection(collection)
      return response;
    }
    getPlantCollection();
  }, [])

  // Go to next question/step
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion => currentQuestion + 1)
  };

  // Go back to previous question/step
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion => currentQuestion - 1)
  };

  const values = { ...properties };

  if (currentQuestion === 1) {
    return (
      <div className="FormContainer">
        <Size
          nextQuestion={nextQuestion}
          handleChange={(e) => { setProperties({ ...properties, size: e.target.value })}}
          filter={properties.size}
        />
      </div>
    )
  } else if (currentQuestion === 2) {
    return (
      <div className="FormContainer">
        <Maintenance
          prevQuestion={prevQuestion}
          nextQuestion={nextQuestion}
          handleChange={(e) => { setProperties({ ...properties, maintenance: e.target.value })}}
          filter={properties.maintenance}
        />
      </div>
    )
  } else if (currentQuestion === 3) {
    return (
      <div className="FormContainer">
        <WaterAmount
          prevQuestion={prevQuestion}
          nextQuestion={nextQuestion}
          handleChange={(e) => { setProperties({ ...properties, waterAmount: e.target.value })}}
          filter={properties.waterAmount}
        />
      </div>
    )
  } else {
    return (
      <div className="FormContainer">
        <AllPlants
          prevQuestion={prevQuestion}
          filter={values}
          collection={collection}
        />
      </div>
    )
  }
};

export default FormContainerHooks