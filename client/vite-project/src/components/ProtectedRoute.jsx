import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // user is valied
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return <div>{children}</div>;
}

export default ProtectedRoute;
