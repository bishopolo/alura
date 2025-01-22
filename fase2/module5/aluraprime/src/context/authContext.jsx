import { createContext, useState } from "react";

export const useAuth = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);

  return (
    <useAuth.Provider value={{ role, setRole }}>{children}</useAuth.Provider>
  );
}
