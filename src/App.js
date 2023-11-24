import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import { useSelector } from 'react-redux';
import HackathonPage from './scenes/hackathonPage';
import HackerProfilePage from './scenes/hackerProfilePage';
import HackathonDetail from './scenes/hackathonDetail';
import Result from './scenes/resultPage';
import Leaderboard from './scenes/leaderboardPage';
import Submission from './scenes/submissionPage';
import AboutUs from './scenes/AboutUs';
import ProjectGallery from './scenes/hackathonDetail/projectGallery';
import ProjectForm from './scenes/hackathonDetail/projectForm';
import ProjectDetail from './scenes/hackathonDetail/projectDetail';
function App() {
  const isAuth = Boolean(useSelector(state => state.token));

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/hackathons" element={<HackathonPage />} />
        <Route path="/profile" element={<HackerProfilePage />} />
        <Route
          path="/hackathondetail"
          element={<HackathonDetail></HackathonDetail>}
        ></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route
          path="/leaderboard"
          element={<Leaderboard></Leaderboard>}
        ></Route>
        <Route path="/submission" element={<Submission></Submission>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/projectgallery"
          element={<ProjectGallery></ProjectGallery>}
        ></Route>
        <Route path="/projectform" element={<ProjectForm />}></Route>
        <Route path="/projectdetail" element={<ProjectDetail />}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
