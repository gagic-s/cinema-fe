import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import MovieList from "./pages/ScreeningsListPage/MovieList";
import ScreeningDetailsPage from "./pages/ScreeningDetailsPage/ScreeningDetailsPage";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import AboutPage from "./pages/Policy&Info/AboutPage/AboutPage";
import ContactUsPage from "./pages/Policy&Info/ContactUsPage/ContactUsPage";
import TermsOfService from "./pages/Policy&Info/TermsOfServicePage/TermsOfServicePage";
import PrivacyPolicy from "./pages/Policy&Info/PrivacyPolicyPage/PrivacyPolicyPage";

import CreateMoviePage from "./pages/CreateMoviePage/CreateMoviePage";
import CreateScreeningPage from "./pages/CreateScreeningPage/CreateScreeningPage";
import { MovieProvider } from "./context/MovieContext/MovieContext";

import Login from "./pages/LoginPage/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Admin from "./pages/AdminPage/AdminPage";
import Register from "./pages/RegisterPage/RegisterPage";

function App() {
  return (

      <MovieProvider>
        <div className={style.container}>
          <Router>
            <Header />
            <main>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<MovieList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
               
                {/* Protected Routes for Regular Users */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/screenings/:id" element={<ScreeningDetailsPage />} />
                </Route>

                {/* Protected Admin Route */}
                <Route element={<ProtectedRoute adminOnly />}>
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/create-movie" element={<CreateMoviePage />} />
                  <Route path="/:id/create-screening" element={<CreateScreeningPage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </MovieProvider>

  );
}

export default App;
