import DashboardPage from "./pages/DashboardPage";
import InvoicesPage from "./pages/InvoicesPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/invoices"
          element={<InvoicesPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;