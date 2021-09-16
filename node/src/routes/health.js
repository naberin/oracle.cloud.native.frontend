const {time_now} = require("../utils/datetime");

var router = require('express').Router();

router.use('/', function (req, res) {

    let timestamp = time_now();
    return res.status(200).send({"status": "UP", "requested": timestamp});

});

module.exports = router;