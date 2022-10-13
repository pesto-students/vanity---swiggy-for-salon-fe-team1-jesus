import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import Login from "../../Login.jsx";
import ErrorFallback from "../../../pages/Error/index.jsx";

const LoginPage = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Login />
        </ErrorBoundary>
    )
}

export default LoginPage;