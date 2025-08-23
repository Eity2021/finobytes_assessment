import { FileText, CheckCircle, Clock, Trash2, TrendingUp, TrendingDown } from "lucide-react"

export default function Cards() {
      const invoiceData = [
    {
      title: "INVOICES SENT",
      amount: "$559.25k",
      change: "+89.24%",
      isPositive: true,
      count: "6,258.00",
      description: "Invoices sent",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-500",
    },
    {
      title: "PAID INVOICES",
      amount: "$409.66k",
      change: "+8.09%",
      isPositive: true,
      count: "2,451.00",
      description: "Paid by clients",
      icon: CheckCircle,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      badgeColor: "bg-green-500",
    },
    {
      title: "UNPAID INVOICES",
      amount: "$136.98k",
      change: "+9.01%",
      isPositive: false,
      count: "720.00",
      description: "Unpaid by clients",
      icon: Clock,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      badgeColor: "bg-orange-500",
    },
    {
      title: "CANCELLED INVOICES",
      amount: "$84.2k",
      change: "+7.55%",
      isPositive: true,
      count: "502.00",
      description: "Cancelled by clients",
      icon: Trash2,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      badgeColor: "bg-purple-500",
    },
  ] 
  return (
 <div >
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {invoiceData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className={`card shadow-md hover:shadow-xl transition-all p-6 ${item.bgColor}`}
              >
                <div className="card-body">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="card-title text-sm text-gray-700">{item.title}</h2>
                    <div className="flex items-center gap-1">
                      {item.isPositive ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${item.isPositive ? "text-green-500" : "text-red-500"
                          }`}
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{item.amount}</div>
                      <div className="flex items-center gap-2">
                        <div className={`badge ${item.badgeColor} text-white text-xs py-1 px-2 rounded-sm`}>
                          {item.count}%
                        </div>
                        <span className="text-sm text-gray-500">{item.description}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
