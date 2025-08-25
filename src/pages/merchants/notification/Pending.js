import { Check, X, Eye, AlertCircle, CheckCircle } from "lucide-react";

export default function Pending({
  requests,
  getPriorityColor,
  handleReject,
  handleApprove,
}) {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600" /> Approval Requests
        </h2>
        {requests.length > 0 ? (
          requests.map((request) => (
            <div
              key={request.id}
              className="p-4 border rounded-lg flex items-start justify-between hover:border-blue-300 transition"
            >
              <div className="flex gap-4">
                <img
                  src={request.user.avatar}
                  alt={request.user.name}
                  className="w-10 h-10 rounded-full ring-2 ring-blue-200"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{request.type}</h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs border ${getPriorityColor(
                        request.priority
                      )}`}
                    >
                      {request.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {request.description}
                  </p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{request.user.name}</span>
                    <span>{request.user.email}</span>
                    <span>{request.timestamp}</span>
                  </div>
                  {request.amount !== "N/A" && (
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-lg font-bold">
                        {request.amount}
                      </span>
                      {request.points > 0 && (
                        <span className="px-2 py-0.5 rounded-full border border-purple-300 text-primary text-xs">
                          {request.points.toLocaleString()} pts
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(request.id)}
                  className="px-3 py-1 text-sm rounded-lg bg-green-500 text-white flex items-center gap-1 hover:bg-green-600"
                >
                  <Check className="w-4 h-4" /> Approve
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  className="px-3 py-1 text-sm rounded-lg border border-red-300 text-red-600 flex items-center gap-1 hover:bg-red-50"
                >
                  <X className="w-4 h-4" /> Reject
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
            <p className="text-gray-500">
              No pending approval requests at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
