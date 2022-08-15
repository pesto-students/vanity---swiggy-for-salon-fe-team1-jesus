import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import Login from "../../Login";
import ErrorFallback from "../../../pages/Error/index";

const LoginPage = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Login />
        </ErrorBoundary>
    )
}

export default LoginPage;