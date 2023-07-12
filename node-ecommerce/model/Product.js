const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [0, 'wrong min price'],
    max: [10000, 'wrong max price'],
  },
  discountPercentage: {
    type: Number,
    min: [1, 'wrong min price'],
    max: [100, 'wrong max price'],
  },
  rating: {
    type: Number,
    min: [0, 'wrong min price'],
    max: [5, 'wrong max price'],
    default: 0
  },
  stock: {
    type: Number,
    min: [0, 'wrong min price'],
    default: 0
  },
  discountPercentage: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const virtual = productSchema.virtual("id")
virtual.get(function(){
  return this._id;
})

productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret){ delete ret._id }
})

// calculated at run time 

exports.Product = mongoose.model("Product", productSchema);
