import { Suspense } from "react";
import Data from "../pages/admin/data/Data";
import PrivateRoute from "../hooks/PrivateRoute";
import AdminDashboard from "../pages/admin/dashboard";
import { LayoutDashboard, BetweenHorizontalEnd, ListEnd } from "lucide-react";

const adminRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <PrivateRoute >
          <AdminDashboard />
        </PrivateRoute>
      </Suspense>
    ),
  },
  {
    name: "Data",
    icon: <BetweenHorizontalEnd size={20} />,
    children: [
      {
        path: "dataLists",
        name: "Data",
        icon: <ListEnd size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <PrivateRoute>
              <Data />
            </PrivateRoute>
          </Suspense>
        ),
      },
    ],
  },
];

export default adminRoutes;
