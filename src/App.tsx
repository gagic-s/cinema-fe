import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/ScreeningsListPage/MovieList";
import ScreeningDetailsPage from "./pages/ScreeningDetailsPage/ScreeningDetailsPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/screenings/:id" element={<ScreeningDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
