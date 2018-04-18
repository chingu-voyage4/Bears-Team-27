import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Location = (props) => {
  let nameField = (
    <h5 className="card-title" onClick={props.toggleEditMode}>
      {props.name}
    </h5>
  );

  if (props.editMode) {
    nameField = (
      <input
        type="text"
        className="card m-3"
        value={props.name}
        onChange={props.changed}
        onBlur={props.toggleEditMode}
      />
    );
  }

  return (
    <div className="card m-3" style={{ width: '15rem' }}>
      {nameField}
      <div className="card-body">
        <Link to={`/location/${props.index}?${props.name}`} className="btn btn-info btn-sm">
          Details
        </Link>
        <button className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Location;
