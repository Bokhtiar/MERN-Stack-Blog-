import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from "./Components/Index";

function App() {
  return (
    <div>
       <BrowserRouter>    
          <Header/>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              {/* <Route path="/blog" element={<BlogList/>}></Route>
              <Route path="/blog/detail/:id" element={ <SingleBlog /> }></Route>
              <Route path="/about" element={ <About  /> }></Route>
              <Route path="/resume" element={ <Resume /> }></Route>
              <Route path="/project" element={ <Project  /> }></Route> */}
            </Routes>
          <Footer/>
        </BrowserRouter>    
    </div>
  );
}

export default App;
