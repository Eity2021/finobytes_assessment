import { Suspense } from "react";
import Data from "../pages/admin/data/Data";
import Dashboard from "../pages/home/Dashboard";

import { LayoutDashboard, BetweenHorizontalEnd, ListEnd } from "lucide-react";
import PrivateRoute from "../hooks/PrivateRoute";

const adminRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <PrivateRoute >
          <Dashboard />
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
