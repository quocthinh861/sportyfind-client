import React, { useContext } from "react";
import plusImg from "../../assets/images/icons/plus.svg";
export default function CreateEventButton() {
  return (
    <button
    //   onClick={}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Tạo mới</span>
    </button>
  );
}
