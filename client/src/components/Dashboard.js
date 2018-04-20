import React, { Component } from 'react';
import Location from './Location';
import './components.css';

class Dashboard extends Component {
  state = {
    locations: []
  };

  addLocationHandler = () => {
    let location = prompt("Enter a location name");
    const newLocation = {
      name: location || 'New Location',
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
    return (
      <div className="container main">
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col">
            <button className='addLocation' onClick={this.addLocationHandler}>Add a Location</button>
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
                  key={index}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Dashboard;
