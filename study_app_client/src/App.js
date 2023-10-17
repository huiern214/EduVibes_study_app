import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/sidebar/Navbar';
import LoginPage from './components/login/LoginPage';
import Profile from './components/profile/Profile';
import Flashcard from './components/flashcard/FlashcardContainer';
import Frotpage from "./components/frontpage/Frontpage"



// ss
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/frontpage" element={<Frotpage />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/flashcards" element={<Flashcard />}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
