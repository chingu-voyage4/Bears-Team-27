const Item = require('../models/item');


// add item
function addItem(req, res) {
  // validate information
  req.checkBody('room', 'Room is required.').notEmpty();
  req.checkBody('name', 'Name is required.').notEmpty();

  const errors = req.validationErrors()

  if (errors) {
    return res.redirect('/current_user')
  }

  // get item details
  const item = new Item({
    userId: req.param.user,
    locationId: req.body.location,
    room: req.body.room,
    name: req.body.name,
    description: req.body.description,
    serialNumber: req.body.serialNumber,
    value: req.body.value,
    warranty: req.body.warranty,
    acquisition: req.body.acquisition,
    images: req.body.images
  });

  // save new item
  item.save((err) => {
    if (err) {
      throw err;
    }

    res.redirect(`/current_user/${req.body.location}`);
  });
}


// edit item
function editItem(req, res) {
  // validate information
  req.checkBody('room', 'Room is required.').notEmpty();
  req.checkBody('name', 'Name is required.').notEmpty();

  const errors = req.validationErrors()

  if (errors) {
    return res.redirect('/current_user')
  }

  Item.findOne({userId: req.param.user, name: req.body.name}, (err, item) => {
    item.locationId = req.body.location;
    item.room = req.body.room;
    item.name = req.body.name;
    item.description = req.body.description;
    item.serialNumber = req.body.serialNumber;
    item.value = req.body.value;
    item.warranty = req.body.warranty;
    item.acquisition = req.body.acquisition;
    item.images = req.body.images;

    item.save((err) => {
      if (err) throw err;

      res.redirect(`/current_user/${req.body.location}`)
    });
  });
}

// delete item
function deleteItem(req,res) {
  Item.remove({userId: req.param.user, name: req.body.name}, (err) => {
    res.redirect(`/current_user/${req.body.location}`)
  });
}

module.exports = {
  addItem: addItem,
  editItem
};
