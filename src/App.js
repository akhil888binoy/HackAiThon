import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import { useSelector } from 'react-redux';
import HackathonPage from './scenes/hackathonPage';

function App() {
  const isAuth = Boolean(useSelector(state => state.token));

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={isAuth ? <HomePage /> : <Navigate to="/" />}
        />
        <Route path="/hackathons" element={<HackathonPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
