import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from "./Components/Index";
import axios from "axios";
import Blog from "./Components/Modules/blog/Blog";
import Blogs from "./Components/Modules/blog/Blogs";
import CategoryBlog from "./Components/Modules/blog/CategoryBlog"
import Login from "./Components/Auth/Login"
import Register from "./Components/Auth/Register"
import UserDashboard from "./Components/User/Index"
import Contact from "./Components/Modules/Contact/Contact";
import News from "./Components/Modules/news/News";
import UserProfile from "./Components/User/Profile";
import Logout from "./Components/User/Logout";

import Navbar from './Components/Layouts/admin/Navbar';

axios.defaults.baseURL = 'http://localhost:4000/api/v1';

function App() {
 const token = localStorage.getItem('token');

  return (
    <div>
      <div>
      {(() => {
        if (token) {
          return (
            <div>
               <BrowserRouter>    
            <Navbar></Navbar>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            </Routes>
            </BrowserRouter>
            </div>
          )
        } else if (!token) {
          return (
            <div>
              
          <BrowserRouter>    
          <Header/>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/blog/:id" element={ <Blog /> }></Route>
              <Route path="/category/blog/:name" element={ <CategoryBlog /> }></Route>
              <Route path="/blogs" element={ <Blogs /> }></Route>
              <Route path="/login" element={ <Login /> }></Route>
              <Route path="/register" element={ <Register /> }></Route>
              <Route path="/contact" element={ < Contact /> }></Route>
              <Route path="/news" element={ < News /> }></Route>
              <Route path="/user/dashboard" element={ <UserDashboard /> }></Route>
              <Route path="/user/profile" element={ <UserProfile /> }></Route>
              <Route path="/user/logout" element={ <Logout /> }></Route> 
          </Routes>
          <Footer/>
        </BrowserRouter>   
            </div>
          )
        } else {
          return (
            <div>login first</div>
          )
        }
      })()}
    </div>

        
           
    </div>
  );
}

export default App;
