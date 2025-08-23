import React, { useState } from 'react'
import { ChevronRight, Upload } from "lucide-react"


export default function AttributeForm() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen ">
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add Category</h1>
        <div className="flex items-center text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">Dashboard</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="#" className="hover:text-gray-700">Category</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700">New category</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow p-6">
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
     

          <div>
            <label htmlFor="category-name" className="block text-sm font-medium text-gray-900 mb-1">
              Category name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="category-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="product-name" className="block text-sm font-medium text-gray-900 mb-1">
              Color Code 
            </label>
            <input
              type="text"
              id="product-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Upload images <span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Upload className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-gray-500 mb-2">
                Drop your images here or{" "}
                <label htmlFor="file-upload" className="text-blue-500 cursor-pointer underline">
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
                <p className="text-sm text-green-600 mt-2">Selected: {file.name}</p>
              )}
            </div>
          </div>
        </div>


        {/* Submit Button */}
        <div className='flex justify-end'>
          <button
            type="submit"
            className="px-[3rem] py-[.8rem] bg-primary text-white font-medium rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-roboto"
          >
            Save Category
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
