import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import HpPrinters from "./pages/HpPrinters";
import Canon from "./pages/Canon";
import BrotherPrinters from "./pages/BrotherPrinters";
import LexmarkPrinters from "./pages/LexmarkPrinters";
import EpsonPrinters from "./pages/EpsonPrinters";
import Pay from "./pages/Pay";
import PayPal from "./pages/PayPal";
import Dell from "./pages/Dell";
import RichoLanier from "./pages/RichoLanier";
import Xerox from "./pages/Xerox";
import Panasonic from "./pages/Panasonic";

// import Join from './pages/Join';
// import Chat from './pages/Chat';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Support For Printers</title>
          <meta
            name="description"
            content="support for printers,support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers"
          />
                  <link rel="https://chattotech.com" href="/"></link>

          <meta
            name="keywords"
            content="support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers"
          ></meta>
        </Helmet>

       
        <img
        className="img2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9APhwfrgDKLWfRale1zzUnrQ_9t7sqYauA&usqp=CAU"
        alt="tech Support"
      ></img>
        <nav id="div2">
          <Link to="/" id="div1">
            Home
          </Link>
          <Link to="/about" id="div1">
            About
          </Link>
          <Link to="/contact" id="div1">
            Contact
          </Link>
          <Link to="/testimonials" id="div1">
            Testimonials
          </Link>
          <Link to="/paypal" id="div1">
            PayPal
          </Link>
          
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="hpprinters" element={<HpPrinters />} />
          <Route path="canon" element={<Canon />} />
          <Route path="brotherPrinters" element={<BrotherPrinters />} />
          <Route path="lexmarkPrinters" element={<LexmarkPrinters />} />
          <Route path="epsonPrinters" element={<EpsonPrinters />} />
          <Route path="pay" element={<Pay />} />
          <Route path="paypal" element={<PayPal />} />
          <Route path="dell" element={<Dell />} />
          <Route path="richolanier" element={<RichoLanier />} />
          <Route path="xerox" element={<Xerox/>} />
          <Route path="panasonic" element={<Panasonic/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
