import React from 'react';
import { Link } from 'react-router-dom';

const Location = props => {
  if (props.editMode) {
    return (
      <input
        type="text"
        className="card m-3"
        value={props.name}
        onChange={props.changed}
        onBlur={props.toggleEditMode}
      />
    );
  } else {
    return (
      <div
        className="card m-3"
        style={{ width: '15rem' }}
        onClick={props.toggleEditMode}
      >
        <h5 className="card-title">{props.name}</h5>
        <div className="card-body">
          <Link to={`/location/${props.index}`} className="btn btn-info btn-sm">
            Details
          </Link>
        </div>
      </div>
    );
  }
};

export default Location;
