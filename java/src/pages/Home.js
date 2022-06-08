import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const Home = () => {
  const [status, setStatus] = useState(false);
  const [interest, setInterest] = useState(false);

  function getFormData(e) {
    console.log(interest);
    alert(
      "We Will Connect You Soon, Please Ask Your Query In Chatbox For Instant Help"
    );
    e.preventDefault();
  }

 
  return (
    <div>
      <Helmet>
        <title>Support For Printers</title>
        <meta
          name="description"
          content="chat to tech provide the tech support for All printers -support for printers,support for hp printers-support for brother printers-support for canon printers
          -support for lexmark printers-support for epson printers"
          data-rh="true"
        />
        <link rel="https://chattotech.com" href="/home"></link>
        <meta
          name="keywords"
          content="support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers"
        ></meta>
      </Helmet>
      <br></br>
      <p
        style={{
         
          textAlign: "center",

          fontSize: "30px",
          backgroundColor: "darkblue",
         
          color: "white",
          fontWeight: "700",
        }}
      >
        We Will Help You 1800-944-2441
      </p>

      
    
      <span
        style={{
        marginLeft:'10%',
         fontSize:"20px",
          color: "red",
          fontWeight: "700",
        }}
      >
      Connect All Devices With Your Printer 
      
      </span>
      <span><div style={{ marginLeft: "44%",marginTop:"80px" }}>
        <form onSubmit={getFormData}>
          <select onChange={(e) => setInterest(e.target.value)}>
            <option>Select Your Printer</option>
            <option>HP Printers Hewlett Packard-</option>
            <option>Support For Canon Printers-</option>
            <option>Support For Brother Printers</option>
            <option>Support For Lexmark Printers</option>
            <option>Support For Epson Printers</option>
            <option>Support For Dell Printers</option>

            <option>Support For Dymo Printers</option>

            <option>Support For fujitsu Printers</option>

            <option>Support For ibm Printers</option>
            <option>Support For kodak Printers</option>

            <option>Support For konica minolta Printers</option>

            <option>Support For oki Printers</option>
            <option>Support For panasonic Printers</option>

            <option>Support For sharp Printers</option>

            <option>Support For pantum Printers</option>

            <option>Support For ricoh Printers</option>
            <option>Support For print Support pyramid Printers</option>

            <option>Support For samsung Printers</option>

            <option>Support For tekronix Printers</option>

            <option>Support For toshiba Printers</option>
          </select>{" "}
          <span>
            {" "}
            <button type="submit">Send </button>
          </span>
          <br></br> <br></br> <br></br> <br></br> <br></br>
        </form>
        {status ? (
          <p style={{ backgroundColor: "skyblue", textAlign: "center" }}>
            <strong>
              HP Printers Hewlett Packard <br></br>Support For Canon Printers{" "}
              <br></br>Support For Brother Printers<br></br> Support For Lexmark
              Printers<br></br> Support For Epson Printers
            </strong>
          </p>
        ) : null}
      </div></span>

      <img
        src="https://cdn-fehhn.nitrocdn.com/hinRdZAzbnhvrZEDvtMeclymQdiNGiNA/assets/static/optimized/rev-d4c0e51/wp-content/uploads/2022/04/teams-devices.png"
        alt="Support for printer"
        style={{ width: "50%",marginTop:"-200px" }}
      ></img>

      

      <div
        style={{
          color: "blue",
          display: "grid",

          fontSize: "20px",
        }}
      >
        <button
          style={{
            width: "100%",
          }}
          onClick={() => setStatus(!status)}
        >
          Support For Printers
        </button>
      </div>

      <br></br> <br></br> <br></br> <br></br> 

      <div className="linkcontainer">
        <div className="linkcontainerdiv">
          <strong>
            <Link to={"HpPrinters"}>Support For HP Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"EpsonPrinters"}>Support For Epson Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"Canon"}>Support For Canon Printers-</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"LexmarkPrinters"}>Support For Lexmark Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
      
          <strong>
            <Link to={"BrotherPrinters"}>Support For Brother Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"HpPrinters"}>Problems In Hp Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"EpsonPrinters"}>Problems In Epson Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"Canon"}>Problems In Canon Printers-</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
          <strong>
            <Link to={"LexmarkPrinters"}>Problems In Lexmark Printers</Link>
          </strong>
        </div>

        <div className="linkcontainerdiv">
        
          <strong>
            <Link to={"BrotherPrinters"}>Problems In Brother Printers</Link>
          </strong>
        </div>
        <div className="linkcontainerdiv">
        
          <strong>
            <Link to={"BrotherPrinters"}> Instant Help For Brother Printers</Link>
          </strong>
        </div>
        <div className="linkcontainerdiv">
        
        <strong>
          <Link to={"HpPrinters"}> Instant Help For HP Printers</Link>
        </strong>
      </div>
      <div className="linkcontainerdiv">
        
        <strong>
          <Link to={"Dell"}>Support For Dell Printers</Link>
        </strong>
      </div>
      <div className="linkcontainerdiv">
      
        <strong>
          <Link to={"RichoLanier"}>Support For RichoLanier Printers</Link>
        </strong>
      </div>
      <div className="linkcontainerdiv">
      
      <strong>
        <Link to={"Xerox"}>Support For Xerox Printers</Link>
      </strong>
    </div>
    <div className="linkcontainerdiv">
      
      <strong>
        <Link to={"Panasonic"}> Support For Panasonic Printers</Link>
      </strong>
    </div>
    <div className="linkcontainerdiv">
        
        <strong>
          <Link to={"BrotherPrinters"}>Problems In Brother Printers</Link>
        </strong>
      </div>
      <div className="linkcontainerdiv">
      
        <strong>
          <Link to={"BrotherPrinters"}> Instant Help For Brother Printers</Link>
        </strong>
      </div>
      <div className="linkcontainerdiv">
      
      <strong>
        <Link to={"HpPrinters"}> Instant Help For HP Printers</Link>
      </strong>
    </div>
    <div className="linkcontainerdiv">
      
      <strong>
        <Link to={"HpPrinters"}> Instant Help For HP Printers</Link>
      </strong>
    </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>problems in Canon printers </h2>


      <div class="container">
        <img
          src="https://m.media-amazon.com/images/I/61tk3NENc7L._SL1500_.jpg"
          alt="Avatar"
          className="image"
        ></img>
        <div class="overlay">
          <div class="text">
            <p style={{ fontSize: "10px" }}>
              <strong>Canon-printer</strong>
              <br></br>Ink tank is empty.<br></br>
              Ink tank not installed in proper position.<br></br>
              Ink tank is not installed securely.<br></br>
              Unnecessary print jobs are left in queue /<br></br> Computer
              problems. The CD-R Tray is not set properly.<br></br>
              The printable DVD/CD is not placed<br></br> properly on the CD-R
              Tray. The machine is not ready.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
      <h2>problems in HP printers </h2>

        <div class="container">
          <img
            src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHAlMjBwcmludGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="Avatar"
            className="image"
          ></img>
          <div class="overlay">
            <div class="text">
              <p style={{ marginTop: "13px", fontSize: "10px" }}>
                <strong>HP-printer</strong>
                <br></br>Ink tank is empty.<br></br>
                Paper jams.<br></br>
                Some or all of the printing on the page is faded Ghosting. Toner
                smears or does not stay on the paper. <br></br>
                Printer is displaying a 50.4 error message<br></br>
                Can't find a driver for a particular operating system. Printer
                is not printing from the expected paper tray.
              </p>
            </div>
          </div>
        </div>
        <h2>problems in Brother printers</h2>

        <div class="container">
          <img
            src="https://m.media-amazon.com/images/I/51PSyaqEUmL._SL1200_.jpg"
            alt="Avatar"
            className="image"
          ></img>
          <div class="overlay">
            <div class="text">
              <p style={{ marginTop: "13px", fontSize: "10px" }}>
                <strong>Brother-Printer</strong>
                <br></br>Ink tank is empty.<br></br>
                Printer is unresponsive. Printer won't print.<br></br>
                Bad print quality.<br></br>
                Uncertain about printer security.<br></br>
                My printer won't scan.<br></br>
                Too many paper jams. Prints too slowly.<br></br>
                Printing is too expensive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>problems in Lexmark printers</h2>
      <div class="container">
        <img
          src="https://m.media-amazon.com/images/I/919xc9juaEL._AC_SL1500_.jpg"
          alt="Avatar"
          className="image"
        ></img>
        <div class="overlay">
          <div>
            <p style={{ fontSize: "10px" }}>
              <strong>Problems In Lexmark Printers</strong>
              <br></br>Ink tank is empty. Driver installation problems. Lexmark
              printer setup errors.<br></br>
              Printer not working/printing. Paper jam & cartridge issues.
              Performance and speed is slow. Difficulties in updating the
              drivers.Check your printer connection. Set your printer as default
              printer. Update your printer driver. Check the Print Spooler
              service. Clear all print jobs. Use another program to print your
              document. Check the status of your printer.<br></br>
            </p>
          </div>
        </div>
      </div>
      <h2>Problems In EPSON Printers</h2>
      <div class="container">
        <img
          src="https://printer.kalimstores.com/wp-content/uploads/l6460-1.jpg"
          alt="Avatar"
          className="image"
        ></img>
        <div class="overlay">
          <div class="text">
            <p style={{ marginTop: "15px", fontSize: "10px" }}>
              <br></br>
              <strong>Problems In Epson-Printer</strong>
              <br></br>Ink tank is empty.<br></br>Print Spooler issues.
              <br></br>Some of the most common printer<br></br> problems that
              most of us <br></br>have experienced include paper jamming,
              <br></br> slow printing, uneven printing,<br></br> and wrong
              colour output. <br></br>If you use your printer frequently,
              <br></br> we know how annoying it can be to have<br></br>{" "}
              persisting problems with the printer.
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <br></br>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          backgroundColor: "grey",
        }}
      >
        what we Support
      </h1>
      <img
        src="https://chiefit.me/wp-content/uploads/2014/09/HP-Printer-Logo.jpg"
        alt="Support for printer"
        width="15%"
      ></img>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlajS4je3xyF3df9-VWvLDCV7NncHFjAIIw&usqp=CAU"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://e7.pngegg.com/pngimages/501/459/png-clipart-dell-hewlett-packard-logo-asus-acer-hewlett-packard-blue-angle-thumbnail.png"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://zeevector.com/wp-content/uploads/2021/02/Brother-Logo-Vector.png"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://i.pinimg.com/originals/a1/79/a4/a179a400366bf6f5de2e76e42285a446.png"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMet-u0upnLnvTZ8dcv4PxW3nm3OseGWB8A&usqp=CAU"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9MNIqVhAI1LJUiSXyhdrEfGndwcq6qA7X6s5H1mt2YHl1tR8CtWa48nv-LyQS2oTvuA&usqp=CAU"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://thumbnail.imgbin.com/11/17/24/imgbin-fuji-xerox-printing-multi-function-printer-printer-sJb9jZFug82DnqbcQSHAEX7fV_t.jpg"
        alt="Support for printer"
        width="15%"
      ></img>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE_MUyqCCPn0F8CeawRWJZ9M5AfV5wgskLPfmHh-NiCDiZU3FgokEvHfujFGbgKfATMo&usqp=CAU"
        alt="Support for printer"
        width="15%"
      ></img>
      <img
        src="https://www.sharp-cee.com/sharp/apps/themes/redesign/svg/SharpBeOriginal.svg"
        alt="Support for printer"
        width="15%"
      ></img>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuL9A3qlPAFPnG4p3qSqcR6SxonZTbyRMuXDSJ-lnlhcsNBdyPQ2hROr-OiueQ1ZvWXQ&usqp=CAU"
        alt="Support for printer"
        width="15%"
      ></img>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oDwQ8Ki6r0TnKJ3-0GPUIbw_L1cx1ZLGVA&usqp=CAU"
        alt="Support for printer"
        width="15%"
      ></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="footerr">
        <strong>
          <p>Support for hp Printers</p>
        </strong>
        <strong>
          <p>Support for Canon printers</p>
        </strong>
        <strong>
          <p>Support for Lexmark printers</p>
        </strong>
        <strong>
          <p>Support for EPSON printers</p>
        </strong>

        <strong>
          <p>Support for Brother printers</p>
        </strong>

        <strong>
          <p>problems in hp printers</p>
        </strong>
        <strong>
          <p>problems in canon printers</p>
        </strong>

        <strong>
          <p>problems in Lexmark hp printers</p>
        </strong>
        <strong>
          <p>problems in EPSON printers</p>
        </strong>
        <strong>
          <p>problems in Brother printers</p>
        </strong>
        <strong>
          <p>Support for All printers</p>
        </strong>
        <strong>
          <p>Support for printers</p>
        </strong>

        <h1
          style={{ textAlign: "center", marginLeft: "130%", fontSize: "20px" }}
        >
          [Copyright&copy;techhelp]
        </h1>
      </div>
    </div>
  );
};

export default Home;
