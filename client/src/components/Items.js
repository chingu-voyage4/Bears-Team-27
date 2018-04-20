import React from 'react';

// This component should fetch data from location id and display
import { location1, location2, location3 } from '../seed';
import ItemDetail from './ItemDetail';

const Items = props => {
  // get location id from props.match.params.id

  // change seed data based on url param
  let location = [];
  switch (props.match.params.id) {
    case '0':
      location = location1;
      break;
    case '1':
      location = location2;
      break;
    case '2':
      location = location3;
      break;
    default:
      location = null;
  }
  console.log(location);

  return (
    <div>
      <h2>Location {props.match.params.id}</h2>
      <div className="items">
        {location.map(item => (
          <ItemDetail
            item={item.name}
            room={item.room}
            itemDescription={item.description}
            serialNumber={item.serialNumber}
            itemValue={item.value}
            purchaseDate={item.acquisition}
            expDate={item.warranty}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
