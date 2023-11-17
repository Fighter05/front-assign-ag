import Abs from "./components/Abs";
import Hand from "./components/Hand";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Abs />} />
        <Route path="hand" element={<Hand />} />
      </Routes>
    </Router>
  );
}

export default App;
