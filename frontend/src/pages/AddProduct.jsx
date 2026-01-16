import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlinePlus, AiOutlineCloudUpload } from "react-icons/ai";
import { addProducts } from "../services/api.js";

// Validation Schema
const productValidationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Product name must be at least 3 characters")
    .max(100, "Product name must not exceed 100 characters")
    .required("Product name is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .required("Description is required"),
  category: Yup.string()
    .oneOf(["Electronics", "Fashion", "Beauty", "Sports"], "Please select a valid category")
    .required("Category is required"),
  price: Yup.number()
    .min(0.01, "Price must be greater than 0")
    .max(999999, "Price is too high")
    .required("Price is required"),
  rating: Yup.number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating cannot exceed 5")
    .required("Rating is required"),
  discount: Yup.number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100%"),
});

export default function AddProduct() {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState("");

  const categories = ["Electronics", "Fashion", "Beauty", "Sports"];

  const initialValues = {
    title: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    discount: "",
  };

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImageError("");

    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setImageError("Please upload a valid image file (JPG, PNG, GIF, WEBP)");
        setImageFile(null);
        setImagePreview("");
        return;
      }

      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setImageError("Image size must be less than 10MB");
        setImageFile(null);
        setImagePreview("");
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(values, { resetForm }) {
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Validate image
    if (!imageFile) {
      setImageError("Product image is required");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", values.title);
      formDataToSend.append("description", values.description);
      formDataToSend.append("category", values.category);
      formDataToSend.append("price", values.price);
      formDataToSend.append("rating", values.rating);
      formDataToSend.append("discount", values.discount || 0);

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      const data = await addProducts(formDataToSend);
      console.log("Product created:", data);
      
      setMessage({
        type: "success",
        text: `Product "${data.title || values.title}" created successfully!`,
      });

      // Reset form
      resetForm();
      setImageFile(null);
      setImagePreview("");
      setImageError("");
      document.getElementById("image").value = "";
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Error creating product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 via-white to-purple-50 p-4 lg:p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600">Fill in the details to add a new product to your store</p>
        </div>

        {/* Success/Error Message */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-xl border-2 ${
              message.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            } animate-fade-in shadow-md`}
          >
            <p className="font-semibold flex items-center gap-2">
              {message.type === "success" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              {message.text}
            </p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <Formik
            initialValues={initialValues}
            validationSchema={productValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, resetForm }) => (
              <Form className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div className="lg:col-span-2">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter product name"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder:text-gray-400 ${
                        errors.title && touched.title
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-indigo-500"
                      }`}
                    />
                    <ErrorMessage name="title" component="div" className="mt-1 text-sm text-red-600 font-medium" />
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      rows="4"
                      placeholder="Describe your product in detail"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300 resize-none placeholder:text-gray-400 ${
                        errors.description && touched.description
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-indigo-500"
                      }`}
                    />
                    <ErrorMessage name="description" component="div" className="mt-1 text-sm text-red-600 font-medium" />
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        id="category"
                        name="category"
                        className={`w-full appearance-none px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300 cursor-pointer bg-white ${
                          errors.category && touched.category
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-indigo-500"
                        }`}
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </Field>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <ErrorMessage name="category" component="div" className="mt-1 text-sm text-red-600 font-medium" />
                  </div>

                  {/* Rating */}
                  <div>
                    <label htmlFor="rating" className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="number"
                      id="rating"
                      name="rating"
                      min="0"
                      max="5"
                      step="0.1"
                      placeholder="0.0 - 5.0"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder:text-gray-400 ${
                        errors.rating && touched.rating
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-indigo-500"
                      }`}
                    />
                    <ErrorMessage name="rating" component="div" className="mt-1 text-sm text-red-600 font-medium" />
                  </div>

                  {/* Price */}
                  <div>
                    <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                      Price ($) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                      <Field
                        type="number"
                        id="price"
                        name="price"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        className={`w-full px-4 py-3 pl-8 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder:text-gray-400 ${
                          errors.price && touched.price
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-indigo-500"
                        }`}
                      />
                    </div>
                    <ErrorMessage name="price" component="div" className="mt-1 text-sm text-red-600 font-medium" />
                  </div>

                  {/* Discount */}
                  <div>
                    <label htmlFor="discount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Discount (%)
                    </label>
                    <Field
                      type="number"
                      id="discount"
                      name="discount"
                      min="0"
                      max="100"
                      step="1"
                      placeholder="0 - 100"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300 placeholder:text-gray-400 ${
                        errors.discount && touched.discount
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-indigo-500"
                      }`}
                    />
                    <ErrorMessage name="discount" component="div" className="mt-1 text-sm text-red-600 font-medium" />
                  </div>

                  {/* Product Image */}
                  <div className="lg:col-span-2">
                    <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Image <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <label
                        htmlFor="image"
                        className={`w-full flex items-center justify-center gap-3 px-4 py-8 border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer group ${
                          imageError
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
                        }`}
                      >
                        <AiOutlineCloudUpload className={`w-8 h-8 transition-colors ${
                          imageError ? "text-red-400" : "text-gray-400 group-hover:text-indigo-600"
                        }`} />
                        <div className="text-center">
                          <p className={`text-sm font-semibold ${
                            imageError ? "text-red-600" : "text-gray-700 group-hover:text-indigo-600"
                          }`}>
                            {imageFile ? imageFile.name : "Click to upload image"}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF, WEBP up to 10MB</p>
                        </div>
                      </label>
                    </div>
                    {imageError && <div className="mt-1 text-sm text-red-600 font-medium">{imageError}</div>}

                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="mt-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
                        <p className="text-xs font-semibold text-gray-600 mb-2">Image Preview:</p>
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImageFile(null);
                              setImagePreview("");
                              setImageError("");
                              document.getElementById("image").value = "";
                            }}
                            className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-300"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Creating Product...</span>
                      </>
                    ) : (
                      <>
                        <AiOutlinePlus className="w-5 h-5" />
                        <span>Create Product</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setImageFile(null);
                      setImagePreview("");
                      setImageError("");
                      setMessage({ type: "", text: "" });
                      document.getElementById("image").value = "";
                    }}
                    className="px-6 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    Clear Form
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
