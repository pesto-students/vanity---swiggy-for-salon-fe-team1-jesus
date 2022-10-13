import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {

    const { isAuth } = useSelector((state) => state.auth)

    return (
        isAuth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;