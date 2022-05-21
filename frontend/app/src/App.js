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

axios.defaults.baseURL = 'http://localhost:4000/api/v1';

function App() {
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
              <Route path="/user/dashboard" element={ <UserDashboard /> }></Route>
             {/* // // <Route path="/about" element={ <About  /> }></Route>
              // <Route path="/resume" element={ <Resume /> }></Route>
              // <Route path="/project" element={ <Project  /> }></Route>  */}
            </Routes>
          <Footer/>
        </BrowserRouter>    
    </div>
  );
}

export default App;
