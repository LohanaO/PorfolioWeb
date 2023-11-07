import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Themes from './components/Themes';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';



function App() {
 

  return (
   <BrowserRouter>
   <Themes/>
     <NavBar />
    <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
     
    </Routes>
   </BrowserRouter>
  )
}

export default App
