// import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard_Sales from "./pages/blog/dashboard";
import Posts from "./pages/blog/posts";
import Comments from "./pages/blog/comments";
import Likes from "./pages/blog/likes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/index" exact element={<Index />} />
          {/* Blog */}
          <Route path="/blog_dashboard" exact element={<Dashboard_Sales />} />
          <Route path="/blog_posts" exact element={<Posts />} />
          <Route path="/blog_comments" exact element={<Comments />} />
          <Route path="/blog_likes" exact element={<Likes />} />
          {/* ChatBox */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
