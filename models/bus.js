const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BusSchema = new Schema({
    name: {type: String, required: true, max: 100},
    registration_number: {type: String},
    owner: {
        name: {type: String},
        phone: {type: Number}
    },
    driver: {
        name: {type: String},
        phone: {type: Number}
    },
    type: {type: String},
    seat_type: {type: String},
    available_seats: {type: Number},
    total_seats: {type: Number}
});


// Export the model
module.exports = mongoose.model('Bus', BusSchema);