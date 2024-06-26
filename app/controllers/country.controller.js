const db = require("../models");
const Country = db.country;

// Create and Save a new Country
exports.create = (req, res) => {
  // Validate request
  if (!req.body.country) {
    res.status(400).send({
      message: "Country can not be empty!"
    });
    return;
  }

  // Create a Country
  const country = {
    country: req.body.country,
  };

  // Save Genre in the database
  Country.create(country)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Country."
      });
    });
};

  exports.findAll = (req, res) => {
    const country = req.query.country;
    var condition = country ? { country: { [Op.like]: `%${country}%` } } : null;
  
    Country.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving countries."
        });
      });
  };

  // Find a single Country with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Country.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Country with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Country with id=" + id
      });
    });
};

// Update a Country by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Country.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Country was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Country with id=${id}. Maybe Country was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Country with id=" + id
      });
    });
};

// Delete a Country with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Country.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Country was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Country with id=${id}. Maybe Country was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Country with id=" + id
      });
    });
};

// Delete all Countries from the database.
exports.deleteAll = (req, res) => {
  Country.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Country were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all countries."
      });
    });
};