import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetail() {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <h1>Thông tin chi tiết</h1>
      <div className="border w-40">
        <p>ID: {state.id}</p>
        <p>User Name: {state.userName}</p>
        <p>Email: {state.email}</p>
        <p>Address: {state.address}</p>
      </div>
    </>
  );
}
