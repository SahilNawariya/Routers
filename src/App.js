import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/Navbar";
/* import Page404 from "./components/Page404"; */
import RoutProps from "./components/RoutProps";
import Filter from "./components/filters";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Chanel from "./components/Chanel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/ProtRout";


export default function App(){
  return(
    <Container>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Protected Components={Home}/>}/>
        <Route path="/about" element={<Protected Components={About}/>}/>
        {/* <Route path="/*" element={<Page404/>}/> */}
        <Route path="/RoutProps/:name" element={<RoutProps />} />
          <Route path="/Filter" element={<Protected Components={Filter}/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Contact/" element={<Contact/>} >
          <Route path="company" element={<Company/>}/>
          <Route path="Chanel" element={<Chanel/>}/>
          <Route path="Other" element={<Other/>}/>
        </Route>

        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>
    </Container>
  )
}