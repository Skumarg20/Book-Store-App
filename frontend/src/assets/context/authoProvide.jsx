import React, { createContext, useContext, useState } from "react";

// Create a new context for authentication
export const AuthContext = createContext();

// AuthProvider component that will wrap your application
export default function AuthProvider({ children }) {
  // Retrieve the initial authentication user from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // Use state to manage the authentication user
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Render the AuthContext.Provider and provide authUser state and setAuthUser function to children components
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext in functional components
export const useAuth = () => useContext(AuthContext);
