import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Home from './Home.jsx'
// import About from './About.jsx'
// import Cart from './Cart.jsx'
// import Contact from './Contact.jsx'
// import Blog from './Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home/>
    <About />
    <Blog />
    <Cart />
    <Contact /> */}

  </StrictMode>,
)
