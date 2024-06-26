import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/sidebar/Navbar';
import LoginPage from './components/login/LoginPage';
import Profile from './components/profile/Profile';
import Forum from './components/forum/Forum';
import Flashcard from './components/flashcard/FlashcardContainer';
import Frotpage from "./components/frontpage/Frontpage";
import PlansAndPricing from './components/plans&price/Plans';
import HealGPT from './components/healgpt/HealGPT';
import Timetable from './components/flashcard/Timetable';
import Library from './components/e-library/Library';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Navigate to="/frontpage" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/frontpage" element={<Frotpage />} />
            <Route path="/plansprice" element={<PlansAndPricing />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/flashcards" element={<Timetable />}></Route>
            <Route path="/biologyflashcard" element={<Flashcard />} />
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/healgpt" element={<HealGPT />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>

          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
