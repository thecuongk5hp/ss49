import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Notfound from "./components/notfound/Notfound";
import Product from "./components/product/Product";
import Detail from "./components/detail/Detail";
import Admin from "./components/admin/Admin";
import Account from "./components/account/Account";
import ListUser from "./components/listUser/ListUser";
import UserDetail from "./components/userDetail/UserDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home></Home>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
        <Route path="/listUser" element={<ListUser></ListUser>}></Route>
        <Route path="/userDetail" element={<UserDetail></UserDetail>} />
      </Routes>
    </>
  );
}
