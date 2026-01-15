import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineCloudUpload } from "react-icons/ai";
import { addProducts } from "../services/api.js";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    discount: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [imagePreview, setImagePreview] = useState("");

  const categories = ["Electronics", "Fashion", "Beauty", "Sports"];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("rating", formData.rating);
      formDataToSend.append("discount", formData.discount);

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }
      const data = await addProducts(formDataToSend);
      console.log("Product created:", data);
      setMessage({
        type: "success",
        text: `Product "${data.title || formData.title}" created successfully!`,
      });

      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        rating: "",
        discount: "",
      });
      setImageFile(null);
      setImagePreview("");
    } catch {
      setMessage({
        type: "error",
        text: "Error creating product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 via-white to-purple-50 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Add Product
          </h1>
        </div>

        {message.text && (
          <div
            className={`mb-6 p-4 rounded-xl border-2 ${
              message.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            } animate-fade-in`}
          >
            <p className="font-semibold">{message.text}</p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ">
          <form onSubmit={handleSubmit} className="p-6 lg:p-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter product name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"
                />
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe your product in detail"
                  className="w-full placeholder:text-gray-400 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm  font-semibold text-gray-700 mb-2"
                >
                  Category <span className="text-red-500 ">*</span>
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full placeholder:text-gray-400 appearance-none px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 cursor-pointer bg-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Rating <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="0.0 - 5.0"
                  className="w-full placeholder:text-gray-400 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300"
                />
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="image"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Product Image <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    required
                    accept="image/*"
                    className="hidden"
                  />
                  <label
                    htmlFor="image"
                    className="w-full flex items-center justify-center gap-3 px-4 py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 cursor-pointer group"
                  >
                    <AiOutlineCloudUpload className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600">
                        {imageFile ? imageFile.name : "Click to upload image"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </label>
                </div>

                {imagePreview && (
                  <div className="mt-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      Image Preview:
                    </p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Price ($) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full placeholder:text-gray-400 px-4 py-3 pl-8 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="discount"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Discount (%)
                </label>
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="1"
                  placeholder="0 - 100"
                  className="w-full placeholder:text-gray-400 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-8 flex gap-4">
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
                  setFormData({
                    title: "",
                    description: "",
                    category: "",
                    price: "",
                    rating: "",
                    discount: "",
                  });
                  setImageFile(null);
                  setImagePreview("");
                  setMessage({ type: "", text: "" });
                  // Reset file input
                  document.getElementById("image").value = "";
                }}
                className="px-6 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
