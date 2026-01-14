import ProductModel from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error.." });
  }
};

export const CreateProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await ProductModel.create({ name });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json("Unable to create product");
  }
};
