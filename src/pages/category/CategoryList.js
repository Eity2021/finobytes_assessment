import React from 'react'
import AttributeList from './AttributeList'

export default function CategoryLists() {
  return (
    <div className="min-h-screen p-6">
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold font-poppins text-primary">Add Attribute</h1>
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-primary hover:text-gray-900">Dashboard</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-primary hover:text-gray-900">Category</a>
          <span className="text-gray-400">/</span>
          <span className="text-primary">All category</span>
        </div>
      </div>
      <AttributeList />
    </div>
  </div>
  )
}
