import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Shopping_cart from "./components/cart/shopping_cart";
import Listing_grid from "./components/category/listing_grid";
import Listing_large from "./components/category/listing_large";
import Index from "./components/home/index";
import Product_detail from "./components/product/product_detail";
import Login from "./components/user/login";
import Register from "./components/user/register";
import All_category from "./components/category/all_category";
import Administration from "./components/crud/administration";
import Brand_crud from "./components/crud/brand/brand_crud";
import Category_crud from "./components/crud/category/category_crud";
import Product_crud from "./components/crud/product/product_crud";
import React from "react";
import Edit_Product from "./components/crud/product/edit_product";
import Add_Product from "./components/crud/product/add_product";
import Introduce from "./components/home/introduce";
import Search_items from "./components/search/search_items";
import Business_partners from "./components/home/service/business_partners";
import Pay from "./components/home/service/pay";
import Rules from "./components/home/service/rules";
import Transport from "./components/home/service/transport";
import Pay_cart from "./components/cart/pay_cart";
import Add_cate from "./components/crud/category/add_cate";
import Add_brand from "./components/crud/brand/add_brand";
import Edit_cate from "./components/crud/category/edit_cate";
import Edit_brand from "./components/crud/brand/edit_brand";
import Payment_success from "./components/cart/payment_success";
import useAuth from "./services/check-login/useAuth";
import ProtectedRoutes from "./services/protected-routes/ProtectedRoutes"
import Order_crud from "./components/crud/order/order_crud";
import Edit_Order from "./components/crud/order/edit_order";

function App() {
  const isAuth = useAuth();

  return (
    <Router>
      <Routes>
        
        {!isAuth ? <Route path="/login" element={<Login />} /> : <Route path="/login" element={<Navigate to="/" replace />} />}
        
        <Route element={<ProtectedRoutes />} >
          <Route path="/administration" element={<Administration />} />
        </Route>

        <Route path="/" element={<Index />} />

        <Route path="/shopping_cart" element={<Shopping_cart />} />

        <Route path="/listing_large/:categoryid" element={<Listing_large />} />

        <Route path="/listing_grid/:categoryid" element={<Listing_grid />} />

        <Route path="/product/:id" element={<Product_detail />} />

        <Route path="/all_category" element={<All_category />} />

        <Route path="/introduce" element={<Introduce />} />

        <Route path="/search_items" element={<Search_items />} />

        <Route path="/administration" element={<Administration />} />

        {/* -------------------------User---------------------------- */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* -------------------------Crud_Product---------------------------- */}

        <Route path="/product_crud" element={<Product_crud />} />

        <Route path="/add_product" element={<Add_Product />} />

        <Route path="/edit_product/:id" element={<Edit_Product />} />

        {/* -------------------------Crud_Category---------------------------- */}

        <Route path="/category_crud" element={<Category_crud />} />

        <Route path="/add_cate" element={<Add_cate />} />

        <Route path="/edit_cate/:id" element={<Edit_cate />} />

        {/* -------------------------Crud_Brand---------------------------- */}

        <Route path="/brand_crud" element={<Brand_crud />} />

        <Route path="/add_brand" element={<Add_brand />} />

        <Route path="/edit_brand/:id" element={<Edit_brand />} />

        {/* -------------------------Crud_Order---------------------------- */}

        <Route path="/order_crud" element={<Order_crud />} />

        <Route path="/edit_order/:id" element={<Edit_Order />} />

        {/* -------------------------Service---------------------------- */}
        <Route path="/business_partners" element={<Business_partners />} />

        <Route path="/pay" element={<Pay />} />

        <Route path="/rules" element={<Rules />} />

        <Route path="/transport" element={<Transport />} />
        {/* -------------------------------------------------------------- */}
        <Route path="/pay_cart" element={<Pay_cart />} />

        <Route path="/payment_success" element={<Payment_success />} />
      </Routes>
    </Router>
  );
}
export default App;
