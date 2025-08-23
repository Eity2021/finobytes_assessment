import  { Suspense } from "react";
import Data from "../pages/admin/data/Data";
import Dashboard from "../pages/home/Dashboard";
import { LayoutDashboard,BetweenHorizontalEnd ,ListEnd ,SquarePlus ,ChartBarStacked} from "lucide-react";

const adminRoutes = [

  {
    path: "/",
    name: "Dashboard",
    icon: <LayoutDashboard  size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    ),
  },

  {

    name: "Dummy Data",
    icon: <BetweenHorizontalEnd   size={20} />,
    children: [
      {
        path: "dataLists",
        name: "Data",
        icon: <ListEnd    size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Data></Data>
          </Suspense>
        ),
      },
    ],
  },


];

export default adminRoutes;
