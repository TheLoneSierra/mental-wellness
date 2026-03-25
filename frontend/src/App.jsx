import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MoodTracker from "./components/MoodTracker";
import JournalPage from "./components/JournalPage";
import InsightsPage from "./components/InsightsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/insights" element={<InsightsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;