import React, { useEffect, useState } from "react";
import api from "../Api";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [message, setMessage] = useState("Verifying...");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setMessage("Invalid verification link.");
      return;
    }

    const verify = async () => {
      try {
        console.log("Verifying with token:", token);
        const res = await api.get(`verify-email/?token=${token}`);
        setMessage(res.data.message);

        
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (err) {
        console.error("Verification error:", err);
        setMessage("Verification failed.");
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
}

export default VerifyEmail;
