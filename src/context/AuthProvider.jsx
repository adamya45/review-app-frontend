import React, { createContext, useState } from "react";
import { signInUser } from "../api/auth";

const AuthContext = createContext();

const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  inPending: false,
  error: "",
};

export default function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState(...defaultAuthInfo);
  const handleLogin = async (email, password) => {
    setAuthInfo({ ...authInfo, inPending: true });
    const { error, user } = await signInUser({ email, password });
    if (error) return setAuthInfo({ ...authInfo, error, inPending: false });

    setAuthInfo({
      profile: { ...user },
      isLoggedIn: true,
      inPending: false,
      error: "",
    });
    localStorage.setItem("auth-token", user.token);
  };

  //, handleLogout, isAuth
  return (
    <AuthContext.Provider value={{ authInfo, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
