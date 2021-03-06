import React, { Component } from 'react';
import NewItem from './NewItem';
import './components.css';

// This component should fetch data from location id and display
import { location1, location2, location3 } from '../seed';
import ItemDetail from './ItemDetail';
import { Modal } from 'reactstrap';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // get location id from props.match.params.id
    // change seed data based on url param
    let location = [];
    switch (this.props.match.params.id) {
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

    const items = location.map(item => (
      <div className="card m-3" style={{ width: '20rem' }}>
        <h5 className="card-title">{item.name}</h5>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item" key='room'>{item.room}</li>
            <li className="list-group-item" key='description'>Description: {item.description}</li>
            <li className="list-group-item" key='serialNumber'>SN: {item.serialNumber}</li>
            <li className="list-group-item" key='value'>Value: {item.value}</li>
            <li className="list-group-item" key='warranty'>Warranty: {item.warranty}</li>
            <li className="list-group-item" key='acqDate'>
              Date of Purchase: {item.acquisition}
            </li>
          </ul>
        </div>
      </div>
    ));
    return (
      <div className='main' id='item_display'>
        <h2>Location {this.props.match.params.id}</h2>
        <Modal isOpen={this.state.modal} className='item_modal text-center'>
          <NewItem toggle={this.toggle} />
        </Modal>
        <button id='new_item' onClick={this.toggle}>Add an item</button>
        <div className="d-flex flex-wrap">{items}</div>
      </div>
    );
  }
}
export default Items;
