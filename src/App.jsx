
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';
import About from './pages/About';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />         
          <Route path="services" element={<Services />} />         
          <Route path="about" element={<About />} />         
          <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<App />);