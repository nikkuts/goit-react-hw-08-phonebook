import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const {isRefreshing, isLoggedIn} = useAuth();
    const shouldRedirect = !isRefreshing && !isLoggedIn;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component; 
};