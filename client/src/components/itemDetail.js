import React, { Component } from 'react';

export class ItemDetail extends Component {
  render () {
    return (
      <div className='item' + {this.props.item}>
        <h4>{this.props.item}</h4>
        <div className='item-details'>
          <div className='item-detail'><span className='detail'>Room:</span>{this.props.room}</div>
          <div className='item-detail'><span className='detail'>Description:</span>{this.props.itemDescription}</div>
          <div className='item-detail'><span className='detail'>Serial Number:</span>{this.props.serialNumber}</div>
          <div className='item-detail'><span className='detail'>Value:</span>{this.props.itemValue}</div>
          <div className='item-detail'><span className='detail'>Date of purchase:</span>{this.props.purchaseDate}</div>
          <div className='item-detail'><span className='detail'>Warranty expiry:</span>{this.props.expDate}</div>
        </div>

        <div className='modify-item'>
          <span className='edit'><i className="far fa-edit"></i> Edit</span>
          <span className='hidden save'><i className="far fa-save"></i> Save</span>
          <span className='delete'><i className="fas fa-trash-alt"></i> Delete</span>
          <span className='hidden back'><i className="far fa-caret-square-left"></i> Back</span>
        </div> <!-- close .modify-item -->

      </div> <!-- close .item -->
    );
  }
}
