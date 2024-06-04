import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

export default function ListUser() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState<User[]>([
    {
      id: 1,
      userName: "Nguyễn Thế Cường",
      email: "abc@gmail.com",
      address: "Hp",
    },
    {
      id: 2,
      userName: "Nguyễn Trọng Kim",
      email: "xyz@gmail.com",
      address: "Hp",
    },
    {
      id: 3,
      userName: "Bùi Thị Hường",
      email: "cvb@gmail.com",
      address: "Hp",
    },
  ]);

  const handleClick = (id: number) => {
    const findUser = listUser.find((user) => user.id === id);
    if (findUser) {
      navigate("/userDetail", { state: findUser });
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {listUser.map((user) => (
        <div key={user.id} className="border w-40">
          <p>ID: {user.id}</p>
          <p>User Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button
            onClick={() => handleClick(user.id)}
            className="btn btn-primary"
          >
            Xem thông tin
          </button>
        </div>
      ))}
    </div>
  );
}
