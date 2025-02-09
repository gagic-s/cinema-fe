import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/Screenings/MovieList";

function App() {
  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
