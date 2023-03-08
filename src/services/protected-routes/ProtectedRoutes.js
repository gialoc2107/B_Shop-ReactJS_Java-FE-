import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../check-login/useAuth";

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoutes;