import React from 'react';
import './components.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewItem = (props) => {
    return (
        <div>
            <ModalHeader toggle={this.toggle}>Add an item</ModalHeader>
        <ModalBody>
        <form name='add_item'>
            <div className='form-group'><input id='item_name' type='text' placeholder='Name' /></div>
            <div className='form-group'><input id='item_room' type='text' placeholder='Room' /></div>
            <div className='form-group'><input id='item_value' type='text' placeholder='Value' /></div>
            <div className='form-group'><input id='item_purchase' type='text' placeholder='Purchase Date' /></div>
            <div className='form-group'><input id='item_warranty' type='text' placeholder='Warranty Expiry' /></div>
            <div className='form-group'><input id='item_serialnum' type='text' placeholder='Serial Number' /></div>
            <div className='form-group'><textarea id='item_description' placeholder='Description' /></div>
          </form>
        </ModalBody>
        <ModalFooter>
        <button form='add_item' className='btn btn-success' id='item_save' type='submit' onClick={props.toggle}>Save</button>
        <button className='btn btn-danger' onClick={props.toggle}>Cancel</button>
        </ModalFooter>
        </div>
    );
};

export default NewItem;
