import { Suspense } from "react";
import { LayoutDashboard, ShoppingBasket, ListEnd, SquarePlus } from "lucide-react";
import MemberDashboard from "../pages/member/dashboard/Index";
import SummeryPoints from "../pages/member/summery/SummeryPoints";

const memberRoutes = [
  {
    path: "/",
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
        path: "Summery",
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
