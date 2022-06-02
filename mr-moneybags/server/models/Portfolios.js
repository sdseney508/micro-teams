const { Schema, Types, model } = require("mongoose");

// Changes made: Turned portfolioSchema into Portfolios model
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
    createdDate: {
        type: Date,
        default: Date.now(),
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
        shares: {
            type: Number,   
            required: true,
        }

    }
    ],

});

const Portfolios = model('portfolios', portfolioSchema)
module.exports = Portfolios;
