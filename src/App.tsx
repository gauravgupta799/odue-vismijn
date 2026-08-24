
import { useScrollReveal } from '@/hooks/useScrollReveal';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Home from "@/pages/Home";
import Contact from '@/pages/Contact';
import About from "@/pages/About"
import Blog from '@/pages/Blog';
import Initiatieven from '@/pages/Initiatieven';
import BlogDetail from './pages/BlogDetails';
import NotFound from './pages/NotFound';


function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/overons" element={<About/>} />
          <Route path="/initiatieven" element={<Initiatieven/>} />
        
          <Route path="/bloggen" element={<Blog/> } />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bloggendetail" element={<BlogDetail/>} />

        </Route>

         <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
