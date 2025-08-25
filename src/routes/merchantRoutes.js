import { Suspense } from "react";
import Customers from "../pages/merchants/customer";
import Purchases from "../pages/merchants/purchases";
import MerchantDashboard from "../pages/merchants/dashboard";
import ContributorRate from "../pages/merchants/contributorRate";
import Notification from "../pages/merchants/notification";
import {
  LayoutDashboard,
  ShoppingBasket,
  ListEnd,
  SquarePlus,
} from "lucide-react";


const merchantRoutes = [
  {
    path: "/dashboard",
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
        path: "dashboard/customers",
        name: "Customers",
        icon: <ListEnd size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Customers />
          </Suspense>
        ),
      },
      {
        path: "dashboard/purchases",
        name: "Purchases",
        icon: <SquarePlus size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Purchases></Purchases>
          </Suspense>
        ),
      },
      {
        path: "dashboard/contributor",
        name: "Contributor Rate",
        icon: <SquarePlus size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContributorRate />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/notification",
    name: "Notification",
    icon: <LayoutDashboard size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Notification />
      </Suspense>
    ),
  },

];

export default merchantRoutes;
