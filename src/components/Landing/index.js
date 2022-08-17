import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../../pages/Error'
import Landing from '../../pages/Landing/index'

const LandingPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Landing />
    </ErrorBoundary>
  )
}
export default LandingPage
