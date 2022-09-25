import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blogs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
