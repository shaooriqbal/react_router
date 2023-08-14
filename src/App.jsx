import './App.css';
import { createBrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import Faq from './pages/Help/faq';
import Contact from './pages/Help/contact';
import NotFound from './pages/NotFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout/>}>
          <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path ="help" element={<HelpLayout />}>
        <Route path="faq"  element ={ <Faq/>}/>
        <Route path="contact" element={ <Contact/>} />
      </Route >
      <Route path="*" element={ <NotFound/>} />
          </Route>
  )
);


function App() {
 return (
    <RouterProvider router={router}/>
  )
}

export default App
