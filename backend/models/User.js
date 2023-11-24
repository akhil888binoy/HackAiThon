import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    picturePath: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: ' ',
    },
    socialmedia: {
      type: [String], // Define it as an array of strings
      default: [],
    },
    createdhackathons: {
      type: [String], // Define it as an array of strings
      default: [],
    },
    participatedhackathons: {
      type: [String], // Define it as an array of strings
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
