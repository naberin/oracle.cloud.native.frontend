const {time_now} = require("../utils/datetime");

let router = require('express').Router();

router.use('/', function (req, res) {

    const now = time_now();
    console.log(`[${now}] GET /health - 200 OK`)
    return res.status(200).send({"status": "UP", "request": now});

});

module.exports = router;