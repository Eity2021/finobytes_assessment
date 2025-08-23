import React from 'react'
import { Eye, Pencil, Trash2,ChevronRight,ChevronLeft   } from "lucide-react";
export default function AttributeList() {
    const attributes = [
        { id: 1, category: "Dried food", icon: "🥫", quantity: 1638, sale: 20 },
        { id: 2, category: "Wet food",icon: "🥫",   quantity: 1638, sale: 20 },
        { id: 3, category: "Supplemental food", icon: "🥫", quantity: 1638, sale: 20 },
        { id: 4, category: "Puppy food",  icon: "🥫", quantity: 1638, sale: 20},
        { id: 5, category: "Food for adult dogs", icon: "🥫",  quantity: 1638, sale: 20 },
        { id: 6, category: "Food for elderly dogs", icon: "🥫", quantity: 1638, sale: 20 },
        { id: 7, category: "Kitten food", icon: "🥫", quantity: 1638, sale: 20 },
        { id: 8, category: "Food for adult cats",icon: "🥫", quantity: 1638, sale: 20},
        { id: 9, category: "Food for elderly cats",icon: "🥫",  quantity: 1638, sale: 20 },
        { id: 10, category: "Special pet food", icon: "🥫", quantity: 1638, sale: 20 },
      ];
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500 ">Showing</span>
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <span className="text-sm text-gray-500">entries</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="search" 
            placeholder="Search here..." 
            className="pl-4 pr-10 py-2 w-64"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
        <button className="bg-primary hover:bg-secondary text-white px-8 py-2 rounded-lg flex items-center gap-2">
          <span>+</span> Add new
        </button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 text-base">Image</th>
            <th className="text-left p-4 text-base">Category</th>
            {/* <th className="text-left p-4">Icon</th> */}
            <th className="text-left p-4 text-base">Quantity</th>
            <th className="text-left p-4 text-base">Sale</th>
            <th className="text-left p-4 text-base">Action</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4 text-sm font-poppins text-primary"><span className="text-xl ">{item.icon}</span></td>
              <td className="p-4 flex items-center gap-2"> <span className='font-medium font-poppins text-primary'>{item.category}</span>
              </td>
              {/* <td className="p-4">{item.icon}</td> */}
              <td className="p-4 text-sm font-poppins text-primary">{item.quantity}</td>
              <td className="p-4 text-sm font-poppins text-primary">{item.sale}</td>
              <td className="p-4 text-sm font-poppins text-primary">
                <div className="flex gap-2">
                  <button className="text-primary hover:text-secondary">
                    <Eye size={18} />
                  </button>
                  <button className="text-green-500 hover:text-green-600">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-between items-center mt-6">
      <div className="text-sm text-gray-500">
        Showing 10 entries
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50"><ChevronLeft /></button>
        <button className="px-3 py-1 border rounded-md bg-primary text-white">1</button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">2</button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">3</button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50"> <ChevronRight /></button>
      </div>
    </div>
  </div>
  )
}
