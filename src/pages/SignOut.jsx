import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user/useSlice";

function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(logout());
  navigate("/tai-khoan/dang-nhap");

  return <></>;
}

export default SignOut;
