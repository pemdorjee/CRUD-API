import mongoose from "mongoose";
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter product name "],
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model ("Product", ProductSchema)
export default Product; // this is esm format 
// otherwise it would be module.exports = Product; (common JS format )