import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
      <h3>Đây là trang chủ</h3>
      <div>B6</div>
      <nav>
        <Link to={""}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <nav>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
        <NavLink to={"/detail"}>Detail</NavLink>
      </nav>
      <nav>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/account"}>Account</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
