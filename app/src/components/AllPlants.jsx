
import ButtonPrev from './buttons/ButtonPrev';
import MediaCard from './MediaCard'
import React from 'react';

const AllPlants = (props) => {
  return (
    <div className="AllPlants">
      <header>
        <h1>Matches made in heaven</h1>
        <ButtonPrev
          prevQuestion={props.prevQuestion}
        />
      </header>
      <div className="Card__Container">
        {props.collection
          .filter(plant =>
            plant.size
              .includes(props.filter.size)
          )
          .filter(plant =>
            plant.maintenance
              .includes(props.filter.maintenance)
          )
          .filter(plant =>
            plant.waterAmount
              .includes(props.filter.waterAmount)
          )
          .map((plant, index) => {
            return (
              <MediaCard
                key={index}
                results={plant}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default AllPlants;
