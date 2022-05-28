const { Schema, Types } = require("mongoose");

const portfolioSchema = new Schema({
    portfolioId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    portfolioName: {
        type: String,
        max_length: 30,
        required: true,
    },
    stocks: [{
        name: {
            type: String,
            required: true,
        },

        dateAdded: {
            type: Date,
            default: Date.now(),
            // required: true,
        },
        purchasePrice: {
            type: Number,
            required: true,
        },

    }
    ],

});

module.exports = portfolioSchema;
