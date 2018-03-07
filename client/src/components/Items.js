import React from 'react';

// This component should fetch data from location id and display
import { location1, location2, location3 } from '../seed';

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
      console.log('I reached case 1');
      break;
    case '2':
      location = location3;
      break;
    default:
      location = null;
  }

  const items = location.map(item => (
    <div className="card m-3" style={{ width: '20rem' }}>
      <h5 className="card-title">{item.name}</h5>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">{item.room}</li>
          <li className="list-group-item">Description: {item.description}</li>
          <li className="list-group-item">SN: {item.serialNumber}</li>
          <li className="list-group-item">Value: {item.value}</li>
          <li className="list-group-item">Warranty:{item.warranty}</li>
          <li className="list-group-item">
            Date of Purchase:{item.acquisition}
          </li>
        </ul>
      </div>
    </div>
  ));

  return <div className="d-flex flex-wrap">{items}</div>;
};

export default Items;
