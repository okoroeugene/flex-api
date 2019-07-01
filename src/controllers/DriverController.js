const _controllerHelper = require('./ControllerHelper'),
    _service = new (require('../services/DriverService'))(),
    debug = require('debug')('DriverController'),
    _constants = require('../config/constants');

function DriverController() {
    this.service = _service;
}

DriverController.prototype = Object.create(_controllerHelper.prototype);

DriverController.prototype.fetchDriver = function (req, res) {
    return this.service.repository.model.find({ user: req.params.id }, (err, response) => {
        return res.send(err || response[0]);
    })
}

module.exports = DriverController;