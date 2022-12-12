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
import AdminAboutAurpon from './pages/Admin/AdminAboutAurpon/AdminAboutAurpon';
import AdminVideoPage from './pages/Admin/AdminVideoPage/AdminVideoPage';
import AdminContactMessage from './pages/Admin/AdminContactMessage/AdminContactMessage';
import AdminTopBannar from './pages/Admin/AdminTopBannar/AdminTopBannar';
import AdminCounter from './pages/Admin/AdminCounter/AdminCounter';
import AdminVideo from './pages/Admin/AdminVideo/AdminVideo';
import AdminAddReview from './pages/Admin/AdminAddReview/AdminAddReview';
import AdminDeletReview from './pages/Admin/AdminDeletReview/AdminDeletReview';
import AdminFooter from './pages/Admin/AdminFooter/AdminFooter';
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
        <Route path="admin" element={<Admin />} >
          <Route path="aboutAurpon" element={<AdminAboutAurpon />} />
          <Route path="AdminVideoPage" element={<AdminVideoPage />} />
          <Route path="AdminContactMessage" element={<AdminContactMessage />} />
          <Route path="AdminTopBannar" element={<AdminTopBannar />} />
          <Route path="AdminCounter" element={<AdminCounter />} />
          <Route path="AdminVideo" element={<AdminVideo />} />
          <Route path="AdminAddReview" element={<AdminAddReview />} />
          <Route path="AdminDeletReview" element={<AdminDeletReview />} />
          <Route path="AdminFooter" element={<AdminFooter />} />

        </Route>
        <Route path="about" element={<About />} >
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
