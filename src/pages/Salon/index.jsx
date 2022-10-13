import React from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import SalonDetails from '../../components/Salon';
import ErrorFallback from '../Error';


const SalonPage = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <SalonDetails />
        </ErrorBoundary>
    )
}

export default SalonPage;