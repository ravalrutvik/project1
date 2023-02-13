import {  Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services'
import './styles/App.scss';
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contect.scss";
import './styles/mediaquery.scss';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/services' element={<Services/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
