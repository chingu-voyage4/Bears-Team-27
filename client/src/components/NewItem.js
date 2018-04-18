import React from 'react';

const NewItem = () => {
    return (
        <div>
          <form>
            <input id='item_name' type='text' placeholder='Name' />
            <input id='item_room' type='text' placeholder='Room' />
            <input id='item_value' type='text' placeholder='Value' />
            <input id='item_purchase' type='text' placeholder='Purchase Date' />
            <input id='item_warranty' type='text' placeholder='Warranty Expiry' />
            <input id='item_serialnum' type='text' placeholder='Serial Number' />
            <textarea id='item_description' placeholder='Description' />
            <button id='item_save' type='submit'>Save</button>
          </form>
        </div>
    );
};

export default NewItem;
