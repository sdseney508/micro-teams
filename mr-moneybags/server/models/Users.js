const {Schema, Types} = require('mongoose');

const userSchema = new Schema(
    email: {
        type: String,
        required: true,
        max_length: 30,
        unique: true  
    },
    portfolios: {
        
    }




)

const User = model('user', userScheUa);

module.exports = User;