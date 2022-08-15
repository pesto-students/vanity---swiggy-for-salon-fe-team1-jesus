import Routing from "./routes/Routing";
import {BrowserRouter as Router} from "react-router-dom"
import {ErrorBoundary} from "react-error-boundary"
import ErrorFallback from "./pages/Error";

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <Routing/>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
