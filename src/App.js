import Routing from "./routes/Routing.jsx"
import {BrowserRouter as Router} from "react-router-dom"
import {ErrorBoundary} from "react-error-boundary"
import ErrorFallback from "./pages/Error/index.jsx";
import store from "./redux/store";
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <Routing/>
      </ErrorBoundary>
    </Router>
    </Provider>
  );
}

export default App;