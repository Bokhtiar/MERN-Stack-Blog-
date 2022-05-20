import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from "./Components/Index";
import axios from "axios";
import Blog from "./Components/Modules/blog/Blog";


axios.defaults.baseURL = 'http://localhost:4000/api/v1';

function App() {
  return (
    <div>
       <BrowserRouter>    
          <Header/>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/blog/:id" element={ <Blog /> }></Route>
              {/* // <Route path="/blog/detail/:id" element={ <SingleBlog /> }></Route>
              // <Route path="/about" element={ <About  /> }></Route>
              // <Route path="/resume" element={ <Resume /> }></Route>
              // <Route path="/project" element={ <Project  /> }></Route>  */}
            </Routes>
          <Footer/>
        </BrowserRouter>    
    </div>
  );
}

export default App;
