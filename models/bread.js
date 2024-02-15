const mongoose = require('mongoose');
const { Schema } = mongoose;

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: { type: Boolean, default: true },
    image: { type: String, default: 'https://placehold.it/500x500.png' },
    baker: { type: String, enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'] },
});

// helper methods
breadSchema.method('getBakedBy', function () {
    return `${this.name} was baked with ❤️ by ${this.baker}`;
});

breadSchema.static('findByBaker', function (baker) {
    return this.find({ baker: baker });
});

const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread;
