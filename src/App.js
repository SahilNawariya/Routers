import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/Navbar";
/* import Page404 from "./components/Page404"; */
import RoutProps from "./components/RoutProps";

export default function App(){
  return(
    <Container>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/*" element={<Page404/>}/> */}
          <Route path="/RoutProps/:name" element={<RoutProps />} />
        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>
    </Container>
  )
}