import { Navigate } from "react-router-dom";

// Protected Route props
interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // if user is logged out, redirect to /
  if (Object.keys(user).length === 0) return <Navigate to="/" replace={true} />;

  return element;
};

export default ProtectedRoute;
