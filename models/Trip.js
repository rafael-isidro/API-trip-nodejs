const mongoose = require('mongoose');

const { Schema } = mongoose;

const { serviceSchema } = require('./Service');

const tripSchema = new Schema(
    {
        destination: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        services: {
            type: [serviceSchema],
        },
    }, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;