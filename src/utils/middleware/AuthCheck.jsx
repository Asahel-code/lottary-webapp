import { Navigate } from "react-router-dom";
import { useUserStore } from "../zustand/Store";

// eslint-disable-next-line react/prop-types
const AuthCheck = ({ children }) => {
  const user = useUserStore((state) => state.user);

  return user?.token ? <>{children}</> : <Navigate to="/login" />;
};

export default AuthCheck;