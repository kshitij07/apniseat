const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/bus');
const Bus = require('../models/bus');


// a simple test url to check that all of our files are communicating correctly.

router.get('/', async (req, res) => {
    try {
        const bus = await Bus.find();
        res.json(bus);
    } catch(err) {
        res.json({mess: err});
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);    
    const bus = new Bus({
        name: req.body.name,
        price: req.body.price
    });

    try{
        const savedBus = await bus.save()
        res.json(savedBus);
    } catch(err) {
        res.json({mess: err});
    }
});



module.exports = router;