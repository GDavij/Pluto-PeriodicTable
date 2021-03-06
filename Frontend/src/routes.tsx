import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//## Pages
import PlutoTable from "./pages/PeriodicTable";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlutoTable />} />
      </Routes>
    </Router>
  );
}
