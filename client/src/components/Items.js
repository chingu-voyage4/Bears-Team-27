import React from 'react';

// This component should fetch data from location id and display
import dummyData from '../seed';

const Items = props => {
  const items = dummyData.map(item => (
    <div className="card m-3" style={{ width: '20rem' }}>
      <h5 className="card-title">{item.name}</h5>
      <div className="card-body">
        <ul className="list-group">
          <li class="list-group-item">{item.room}</li>
          <li class="list-group-item">Description: {item.description}</li>
          <li class="list-group-item">SN: {item.serialNumber}</li>
          <li class="list-group-item">Value: {item.value}</li>
          <li class="list-group-item">Warranty:{item.warranty}</li>
          <li class="list-group-item">Date of Purchase:{item.acquisition}</li>
        </ul>
      </div>
    </div>
  ));

  return <div className="d-flex flex-wrap">{items}</div>;
};

export default Items;
