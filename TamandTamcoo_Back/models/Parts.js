const mongoose = require('mongoose');

const partsSchema = mongoose.Schema({
    image: String,
    loc_x: {
        type: Number,
        default: 0
    },
    loc_y: {
        type: Number,
        default: 0
    },
})


const Parts = mongoose.model('Parts', partsSchema)

module.exports = { Parts }