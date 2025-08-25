import { Suspense } from "react";
import { LayoutDashboard, ShoppingBasket, ListEnd } from "lucide-react";
import MemberDashboard from "../pages/member/dashboard";
import SummeryPoints from "../pages/member/summery";

const memberRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <MemberDashboard />
      </Suspense>
    ),
  },
  {
    name: "Member",
    icon: <ShoppingBasket size={20} />,

    children: [
      {
        path: "dashboard/summery",
        name: "Summery Points",
        icon: <ListEnd size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <SummeryPoints />
          </Suspense>
        ),
      },
    ],
  },
];

export default memberRoutes;
