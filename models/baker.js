const mongoose = require('mongoose');
const { Schema } = mongoose;

// baker schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        // enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
    },
    startDate: {
        type: Date,
        required: true,
    },
    bio: String,
});

// model and export
const Baker = mongoose.model('Baker', bakerSchema);
module.exports = Baker;
