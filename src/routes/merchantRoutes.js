import { Suspense } from "react";
import Settings from "../pages/merchants/settings/Settings";
import Purchases from "../pages/merchants/purchases/Purchases";
import Customers from "../pages/merchants/customer/Customers";
import MerchantDashboard from "../pages/merchants/dashboard/Index";
import { LayoutDashboard, ShoppingBasket, ListEnd, SquarePlus } from "lucide-react";

const merchantRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <MerchantDashboard />
      </Suspense>
    ),
  },
  {
    name: "Merchants",
    icon: <ShoppingBasket size={20} />,
    children: [
      {
        path: "customers",
        name: "Customers",
        icon: <ListEnd size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Customers />
          </Suspense>
        ),
      },
      {
        path: "purchases",
        name: "Purchases",
        icon: <SquarePlus size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Purchases></Purchases>
          </Suspense>
        ),
      },
      {
        path: "settings",
        name: "Settings",
        icon: <SquarePlus size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Settings></Settings>
          </Suspense>
        ),
      },
    ],
  },
];

export default merchantRoutes;
