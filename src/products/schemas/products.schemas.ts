import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
  codigo: String,
  nombre: String,
  precio: Number,
  stock: Number,

});