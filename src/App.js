import Routing from "./routes/Routing.jsx"
import {BrowserRouter as Router} from "react-router-dom"
import {ErrorBoundary} from "react-error-boundary"
import ErrorFallback from "./pages/Error/index.jsx";
import store from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"

function App() {

  let persistor = persistStore(store)

  return (
    <Provider store = {store}>
      <Router>
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <PersistGate persistor={persistor}>
          <Routing/>
        </PersistGate>
      </ErrorBoundary>
    </Router>
    </Provider>
  );
}

export default App;