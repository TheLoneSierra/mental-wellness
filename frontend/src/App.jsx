import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MoodTracker from "./components/MoodTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mood" element={<MoodTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;