// import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import BlogDashboard from "./pages/blog/dashboard";
import Posts from "./pages/blog/posts";
import Comments from "./pages/blog/comments";
import Likes from "./pages/blog/likes";
import PageNotFound from "./pages/PageNotFound";
// Profile
import EditProfile from "./pages/profile/EditProfile";
import Profile from "./pages/profile/Profile";

import { AuthContext } from './helpers/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  
  const [authState, setAuthState] = useState({
    email: "",
    username: "",
    id: 0,
    status: false
  })

  useEffect (() => {
    axios
      .get("http://localhost:3002/authentication/validation", {
        headers:{
          accessToken: localStorage.getItem("accessToken")
        }
      })
      .then((response) => {

        if(response.data.error) {
          setAuthState({
            ...authState, status: false
          })
          
        }
        else {
          setAuthState({
            email: response.data.validToken.email,
            username: response.data.validToken.username,
            id: response.data.validToken.id,
            status: true
          })

          console.log(response.data)
        }

      })
  }, [setAuthState]) // eslint-disable-line
  
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState}}>
        <Router>
          <Routes>
            {!authState.status ? (
              <>
              <Route path="/" exact element={<Login />} />
              <Route path="/*" exact element={<PageNotFound />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              </>
            ) : (
              <>
              <Route path="/" exact element={<Login />} />
              <Route path="/*" exact element={<PageNotFound />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/index" exact element={<Index></Index>} />
              {/* Blog */}
              <Route path="/blog_dashboard" exact element={<BlogDashboard />} />
              <Route path="/blog_posts" exact element={<Posts />} />
              <Route path="/blog_comments" exact element={<Comments />} />
              <Route path="/blog_likes" exact element={<Likes />} />
              {/* Profile */}
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/edit_profile/:id" exact element={<EditProfile />} />
              {/* ChatBox */}
              </>
            )}
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
