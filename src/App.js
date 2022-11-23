import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
import Video from './pages/Video/Video';
import TeamInvictus from './pages/TeamInvictus/TeamInvictus';
import About from './pages/About/About';
import BlogPage from './pages/Blogs/BlogPage';
import DetailBlog from './components/DetailBlog/DetailBlog';
import Admin from './pages/Admin/Admin';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<DetailBlog />} />
        <Route path="video" element={<Video />} />
        <Route path="teamInvictus" element={<TeamInvictus />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
