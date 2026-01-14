import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Electronics', 'Fashion', 'Beauty', 'Sports']
    },
    price: {
      type: Number,
      default: 0,
    },
    OrgPrice: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);
const ProductModel=mongoose.model("Products",productSchema)
export default ProductModel;
