import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/ScreeningsListPage/MovieList";
import ScreeningDetailsPage from "./pages/ScreeningDetailsPage/ScreeningDetailsPage";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import AboutPage from "./pages/Policy&Info/AboutPage/AboutPage";
import ContactUsPage from "./pages/Policy&Info/ContactUsPage/ContactUsPage";
import TermsOfService from "./pages/Policy&Info/TermsOfServicePage/TermsOfServicePage";
import PrivacyPolicy from "./pages/Policy&Info/PrivacyPolicyPage/PrivacyPolicyPage";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/screenings/:id" element={<ScreeningDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </MovieProvider>
  );
}

export default App;
