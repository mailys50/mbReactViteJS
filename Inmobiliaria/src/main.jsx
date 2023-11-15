// import React from 'react'
import ReactDOM from 'react-dom/client'
import Twitters from './Component/Twitter/Twitters.jsx'
import CarouselFunction from './Component/CarouselFunction.jsx'
import './index.css'
// import Card from './Component/Card.jsx'
//import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "animate.css/animate.min.css";
import App from "./App.jsx"
import Slides from "../src/Component/Slides/Slides.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
   
    <App />
    < CarouselFunction />
    <Twitters />
    <Slides />

  </>,
  document.getElementById("root")
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

