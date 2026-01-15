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
    const {
      title,
      description,
      category,
      price,
      rating,
      discount,
    } = req.body;

    const imgPath = req.file ? `/uploads/products/${req.file.filename}` : null;

    const newProduct = await ProductModel.create({
      title,
      description,
      category,
      price,
      rating: rating || 0,
      discount: discount || 0,
      image: imgPath,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ 
      message: "Unable to create product",
      error: error.message 
    });
  }
};
