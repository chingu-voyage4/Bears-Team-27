const Item = require('../models/item');


// add item
function addItem(req, res) {
  // get item details
  const item = new Item({
    userId: req.body.userId,
    locationId: req.body.location,
    room: req.body.room,
    name: req.body.name,
    description: req.body.description,
    serialNumber: req.body.serialNumber,
    value: req.body.value,
    warranty: req.body.warranty,
    acquisition: req.body.acquisition,
    images: req.body.images,
  });

  // save new item
  item.save((err) => {
    if (err) {
      throw err;
    }

    res.redirect(`/home/${req.body.location}`);
  });
}


// edit item

// delete item

module.exports = { addItem: addItem };
