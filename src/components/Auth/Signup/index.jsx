import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../../../pages/Error/index";
import Signup from "../../Signup";

const SignupPage = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Signup />
        </ErrorBoundary>
    )
}

export default SignupPage;