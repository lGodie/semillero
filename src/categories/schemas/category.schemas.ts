import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  code: {
      type:String,
      required: true,
      unique: true
  },
  name: {
      type:String,
      required:true
  },
  active: {
      type: Boolean,
      default: true
  }
});