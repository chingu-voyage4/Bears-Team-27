import React from 'react';

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
      <div className="card m-3" onClick={props.toggleEditMode}>
        {props.name}
      </div>
    );
  }
};

export default Location;
