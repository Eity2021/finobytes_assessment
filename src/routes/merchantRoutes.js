import  { Suspense } from "react";
import ECommerce from "../pages/ecommerce/ECommerce";
import ProductList from "../pages/ecommerce/product/ProductList";
import AddProduct from "../pages/ecommerce/product/AddProduct";
import Dashboard from "../pages/home/Dashboard";
import CategoryLists from "../pages/category/CategoryList";
import NewCategory from "../pages/category/NewCategory";
import OrderList from "../pages/order/OrderList";
import NewSubCategory from "../pages/subCategory/NewSubCategory";
import { LayoutDashboard,ShoppingBasket  ,ListEnd ,SquarePlus ,ChartBarStacked  ,SquareCheckBig   } from "lucide-react";

const merchantRoutes = [
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
    // path: '/ECommerce',
    name: "Products",
    icon: <ShoppingBasket  size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ECommerce />
      </Suspense>
    ),
    children: [
      {
        path: "productLists",
        name: "Product List",
        icon: <ListEnd    size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductList></ProductList>
          </Suspense>
        ),
      },
      {
        path: "addProduct",
        name: "Add Product",
        icon: <SquarePlus  size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AddProduct></AddProduct>
          </Suspense>
        ),
      },
    ],
  },
  {
    // path: '/ECommerce',
    name: "Category",
    icon: <ChartBarStacked   size={20} />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ECommerce />
      </Suspense>
    ),
    children: [
      {
        path: "categoryLists",
        name: "Category Lists",
        icon: <ListEnd    size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CategoryLists></CategoryLists>
          </Suspense>
        ),
      },
      {
        path: "newCategory",
        name: "New Category",
        icon: <SquarePlus  size={20} />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <NewCategory></NewCategory>
          </Suspense>
        ),
      },
    ],
  },



];

export default merchantRoutes;
