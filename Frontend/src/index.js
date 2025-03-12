import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
//import Course from './components/Course';
import AddCourse from './components/AddCourse';
import Allcourses from './components/Allcourses';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import UpdateCourse from './components/UpdateCourse'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <ToastContainer/>
      <Container>{ /*Container gives padding from left and right*/}
        <Header/>
        <Row>
          <Col md={4}><Menus/></Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/add-course" element={<AddCourse/>} exact />
              <Route path="/view-courses" element={<Allcourses/>} exact />
              <Route path="/update-course" element={<UpdateCourse/>} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
