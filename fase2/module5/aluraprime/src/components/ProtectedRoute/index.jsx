import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useContext } from "react";

export function ProtectedRoute({ children, requiredRole }) {
  const { role } = useContext(useAuth);

  if (!role) {
    return <Navigate to="/" />;
  }

  if (requiredRole && !requiredRole.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
}
