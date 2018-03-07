import React, { Component } from 'react';
import Location from './Location';

class Dashboard extends Component {
  state = {
    locations: []
  };

  addLocationHandler = () => {
    const newLocation = {
      name: 'New Location',
      editMode: false
    };
    this.setState({
      locations: [...this.state.locations, newLocation]
    });
  };

  toggleEditLocationHandler = index => {
    console.log(index);
    const location = { ...this.state.locations[index] };
    location.editMode = !location.editMode;

    const locations = [...this.state.locations];
    locations[index] = location;

    this.setState({ locations: locations });
  };

  updateLocationHandler = (event, index) => {
    const location = { ...this.state.locations[index] };
    location.name = event.target.value;

    const locations = [...this.state.locations];
    locations[index] = location;

    this.setState({
      locations: locations
    });
  };

  render() {
    let addLocationText = 'Add a New Location to Begin';

    if (this.state.locations.length > 0) {
      addLocationText = 'Add More Locations';
    }

    return (
      <div className="container">
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col">
            <button onClick={this.addLocationHandler}>{addLocationText}</button>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {this.state.locations.length > 0
            ? this.state.locations.map((location, index) => (
                <Location
                  name={location.name}
                  editMode={location.editMode}
                  toggleEditMode={() => this.toggleEditLocationHandler(index)}
                  changed={event => this.updateLocationHandler(event, index)}
                  index={index}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Dashboard;
