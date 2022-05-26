const {Schema, Types} = require('mongoose');

const userSchema = new Schema(
    email: {
        type: String,
        required: true,
        max_length: 30,
        unique: true, 
    }
)

const User = model('user', userScheUa);
