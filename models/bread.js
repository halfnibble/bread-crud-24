const mongoose = require('mongoose');
const { Schema } = mongoose;

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: { type: Boolean, default: true },
    image: { type: String, default: 'https://placehold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker',
    },
});

// helper methods
breadSchema.methods.getBakedBy = function () {
    return (
        `${this.name} was baked with ❤️ by ${this.baker.name}, ` +
        `who has been with us since ${this.baker.startDate.getFullYear()}`
    );
};

breadSchema.statics.findByBaker = function (baker) {
    return this.find({ baker: baker });
};

const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread;
