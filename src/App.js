import Trump from "./Pages/Trump";
import Card from "./Components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";

function App() {
  return (
    <Card>
      <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/trump" element={<Trump />} />
      </Routes>
    </Router>
    </Card>

    
  );
}

export default App;
