import React from 'react'
import { ErrorBoundary } from "react-error-boundary"
import Dashboard from '../../components/Dashboard';
import ErrorFallback from "../../pages/Error/index.jsx";

const DashboardPage = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Dashboard />
        </ErrorBoundary>
    )
}

export default DashboardPage;