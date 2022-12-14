import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../../pages/Error/index.jsx";
import Landing from "../../components/Landing/index.jsx";

const LandingPage = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Landing />
        </ErrorBoundary>
    )
}
export default LandingPage;