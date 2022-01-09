import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import HeroSection from './components/HeroSection';
import Login from './components/pages/Login';
import Feed from './components/pages/Feed';
import UserProfile from './components/pages/UserProfile';
import PostPage from './components/pages/PostPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/feed' element={<Feed/>} />
          <Route path='/profile/:userId' element={<UserProfile/>} />
          <Route path='/post/:postId' element={<PostPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;