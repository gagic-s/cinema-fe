import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/ScreeningsListPage/MovieList";
import ScreeningDetailsPage from "./pages/ScreeningDetailsPage/ScreeningDetailsPage";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/screenings/:id" element={<ScreeningDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
