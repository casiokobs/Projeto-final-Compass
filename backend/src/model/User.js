import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    email: {type: String,
      validate: {
        validator: function(v) {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
        },
        message: props => `${props.value} is not a valid email! example: xxx@xxx.xxx`
      }, required: true},
    password: {type: String, minlength: [6, 'Password must have at least 6 characters long'], required: true},   
  }
);


const users = mongoose.model('user', userSchema);

export default users;