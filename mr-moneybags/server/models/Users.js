const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

// Added syntax changes for new Portfolios model
const userSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        min_length: 8,
        max_length: 16,
        required: true,
      },
      
      apiKey: {
          type: String,
          // required: true,
      },
   
      portfolios: [
        {
          type: Schema.Types.ObjectId,
          // ref: 'portfolioSchema',
          ref: 'portfolios',
        }
      ],
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


const User = model('user', userSchema);

module.exports = User;