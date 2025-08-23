import React, { useState } from "react";
import { ChevronRight, Upload } from "lucide-react";
export default function AddProduct() {
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900"> Product +</h1>
          <div className="flex items-center text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Dashboard
            </a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <a href="#" className="hover:text-gray-700">
              Category
            </a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700">New Product</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow p-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Product name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="category-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Product Price<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="category-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

        

            <div class="relative w-full">
              <label
                for="category-name"
                class="block text-sm font-medium text-gray-900 mb-1"
              >
                Category name <span class="text-red-500">*</span>
              </label>
              <select
                id="category-name"
                defaultValue=""
                class="appearance-none w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option disabled value="">
                  Pick a text editor
                </option>
                <option>VScode</option>
                <option>VScode fork</option>
                <option>Another VScode fork</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-3 top-5 flex items-center">
                <svg
                  class="w-4 h-4 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.936a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </div>
            </div>

     <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Stock Product<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="category-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div lassName="form-control w-full ">
              <label
                for="category-name"
                class="block text-sm font-medium text-gray-900 mb-1"
              >
               Select Date <span class="text-red-500">*</span>
              </label>

          </div>

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Product Sizes<span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-primary"
                  />
                  <span>S</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-primary"
                  />
                  <span>MD</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-primary"
                  />
                  <span>LG</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-primary"
                  />
                  <span>XL</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-primary"
                  />
                  <span>XXL</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Popular Product<span className="text-red-500">*</span>
              </label>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-primary"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-primary"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Popular Product<span className="text-red-500">*</span>
              </label>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-primary"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-primary"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Featured Product<span className="text-red-500">*</span>
              </label>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-primary"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-primary"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                New Product<span className="text-red-500">*</span>
              </label>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-primary"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-primary"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                OnSale Product<span className="text-red-500">*</span>
              </label>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-primary"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-primary"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Best Selling Product<span className="text-red-500">*</span>
              </label>

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-primary"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-primary"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>

       

          </div>


          <div>
              <label
                for="category-name"
                class="block text-sm font-medium text-gray-900 mb-1"
              >
                Product Description <span class="text-red-500">*</span>
              </label>
              <textarea
                class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primaryresize-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>



          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Upload images <span className="text-red-500">*</span>
            </label>
            <div className="border border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="text-gray-500 mb-2">
                  Drop your images here or{" "}
                  <label
                    htmlFor="file-upload"
                    className="text-primary cursor-pointer underline"
                  >
                    click to browse
                  </label>
                </p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {file && (
                  <p className="text-sm text-green-600 mt-2">
                    Selected: {file.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-[3rem] py-[.8rem] bg-primary text-white font-medium rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-roboto"
            >
              Product +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
