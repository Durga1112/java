import React,{ useState } from 'react'
import { Helmet} from 'react-helmet-async';

import { Link } from 'react-router-dom';

export const HpPrinters = () => {
  const [status, setStatus] = useState(false);
  const [HpPrinters, setPrinters] = useState("");
  const [problems, setProblems] = useState("");





return (
    <>
    <Helmet>
<title>Support For Printers</title>
<meta name="description"
content="support for printers,support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers"
 />
         <link rel="https://chattotech.com" href="/hpprinters"></link>

<meta name="keywords" content='support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers'></meta>

</Helmet>
     {status ? (
          <p style={{ backgroundColor: "skyblue", textAlign: "center" }}>
            <strong>
              HP Printers Hewlett Packard <br></br>Support For Canon Printers{" "}
              <br></br>Support For Brother Printers<br></br> Support For Lexmark
              Printers<br></br> Support For Epson Printers
            </strong>
          </p>
        ) : null
        }
        

        <button
          style={{
            backgroundColor: "skyblue",
            border: "2px solid black",
      padding:"20px",
            marginLeft:"5%"
          }}
          onClick={() => setStatus(!status)}
        >
          Support For Printers
        </button>
<button style={{marginTop:"50px",backgroundColor:"skyblue",fontSize:"20px"}}

        type="button" 
        onClick={() => setPrinters("HP Printers Hewlett Packard-")}
      >      <img src='https://m.media-amazon.com/images/I/611+Ww2rodL._SL1500_.jpg' alt='tech' width="20%"></img>
</button>
      <h1 style={{marginTop:"100px",fontFamily:"sans-serif",fontSize:"20px",color:"blue"}}>{HpPrinters}</h1>

      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setPrinters("Why is my HP printer suddenly not printing?You need to ensure your HP printer has enough paper, ink, or toner, and it is not stuck on paper jam. Also, check the status of your printer cartridge and try replacing it with a new one if it is not good enough. In some cases, your HP printer stops printing after you replace its parts.")}
      >Why is my HP printer suddenly not printing?</button>
      <br></br>

      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setPrinters("How do I fix my HP printer problems?Resolving Print jobs stuck in queue and other printing problems using the HP Print and Scan Doctor Windows: Download HP Print and Scan Doctor. ... Run HPPSdr.exe from the download location on your computer. Once HP Print and Scan Doctor is open, click Start, and then choose your printer. ...Click Fix Printing")}
      >How do I fix my HP printer problems?</button><br></br>
      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setPrinters("Printer is unresponsive.Printer won't print.Bad print quality.Uncertain about printer security.My printer won't scan.Too many paper jams.Prints too slowly.Printing is too expensive.")}
      >What are the common problems of printers?</button>
<div>
      <button style={{backgroundColor:"grey",width:"100%"}}
        type="button"
        onClick={() => setProblems("HP Printers Hewlett Packard-")}>
           <img src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/791279dc-a953-4d6d-97b4-b6fc35d95005._CR0,0,1200,628_SX810_QL70_.png' alt='tech' style={{marginLeft:"10%",height:"150px"}}></img>
<Link to={"PayPal"}>Get Support</Link><br></br>
</button>
<h1 style={{marginTop:"100px",fontFamily:"sans-serif",fontSize:"20PX"}}>{problems}</h1>

      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setProblems("Do a hard reset on your printer. To do this you just need to turn off your printer, unplug for a few minutes and then plug the printer again. If that still doesn't work, try turning the printer and your computer off, and then start it back up again. Try uninstalling and then reinstalling your printer driver.")}
      > Why is my printer not printing even though it is connected?</button>
      <br></br>
      
      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setProblems("There are numerous possible causes for a printer that's randomly producing blanks. The most common ones are empty ink cartridges, improper cartridge installation, and congested nozzles. Driver and software issues can sometimes cause this problem as well.")}
      >Why is my HP printer printing blank pages when it has ink?</button><br></br>
      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() =>setProblems("How do you diagnose printer problems?Microsoft Windows usersOpen the Control Panel. Click or double-click the Printers, Printers and Fax, or Devices and Printers icon.Right-click the printer you want to test and select the Properties or Printer Properties option. ...In the printer's Properties window, click the Print Test Page button.")}
      >How do you diagnose printer problems?</button>

</div>
<div>
      <button style={{backgroundColor:"grey",width:"100%"}}
        type="button"
        onClick={() => setProblems("HP Printers Hewlett Packard-")}>
           <img src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/791279dc-a953-4d6d-97b4-b6fc35d95005._CR0,0,1200,628_SX810_QL70_.png' alt='tech' style={{marginLeft:"10%",height:"150px"}}></img>
</button>
<h1 style={{marginTop:"100px",fontFamily:"sans-serif",fontSize:"20PX"}}>{problems}</h1>

      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setProblems("Do a hard reset on your printer. To do this you just need to turn off your printer, unplug for a few minutes and then plug the printer again. If that still doesn't work, try turning the printer and your computer off, and then start it back up again. Try uninstalling and then reinstalling your printer driver.")}
      > Why is my printer not printing even though it is connected?</button>
      <br></br>
      
      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() => setProblems("There are numerous possible causes for a printer that's randomly producing blanks. The most common ones are empty ink cartridges, improper cartridge installation, and congested nozzles. Driver and software issues can sometimes cause this problem as well.")}
      >Why is my HP printer printing blank pages when it has ink?</button><br></br>
      <button style={{marginLeft:"20%",marginTop:"30px",backgroundColor:"skyblue",fontSize:"20px"}}
        type="button"
        onClick={() =>setProblems("How do you diagnose printer problems?Microsoft Windows usersOpen the Control Panel. Click or double-click the Printers, Printers and Fax, or Devices and Printers icon.Right-click the printer you want to test and select the Properties or Printer Properties option. ...In the printer's Properties window, click the Print Test Page button.")}
      >How do you diagnose printer problems?</button>

</div>

<div>
  <h2>Here are the table that we provide the support for HP printers</h2>
  <p>We diagnose the all printers with the help of our best technicians</p>
  <table class="table">
    <thead>
      <tr>
        <th style={{marginLeft:"5%"}}>Name</th>
        <th>Model</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HP DeskJet</td>
        <td>HP DeskJet 2600 All-in-One series</td>
      
      </tr>      
      <tr class="table-primary">
      <td>HP DeskJet</td>
        <td>Ink Advantage 2600 AIO series</td>
       
      </tr>
      <tr class="table-success">
        <td>HP DeskJet</td>
        <td>HP DeskJet 3700 All-in-One series</td>
       
      </tr>
      <tr class="table-danger">
        <td>HP DeskJet</td>
        <td>HP DeskJet Ink Advantage 2130 AIO series</td>
       
      </tr>
      <tr class="table-info">
        <td>HP DeskJet</td>
        <td>HP DeskJet 2130 All-in-One series</td>
       
      </tr>
      <tr class="table-warning">
        <td>HP DeskJet</td>
        <td>HP DeskJet 3630 All-in-One series</td>
      
      </tr>
      <tr class="table-active">
        <td>HP ENVY</td>
        <td>HP ENVY Pro 6400 All-in-One series</td>
     
      </tr>
      <tr class="table-secondary">
        <td>HP ENVY</td>
        <td>HP ENVY 5000 All-in-One series</td>
        
      </tr>
      <tr class="table-light">
        <td>HP ENVY</td>
        <td>HP ENVY Photo 7800 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP ENVY</td>
        <td>HP ENVY 4520 All-in-One series</td>
     
      </tr>
      <tr class="table-secondary">
        <td>HP ENVY</td>
        <td>HP ENVY 4500 e-All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP LaserJet</td>
        <td>HP LaserJet Pro P1102 series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP LaserJet</td>
        <td>HP LaserJet M1005 Multifunction series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP Laser</td>
        <td>HP Laser NS MFP 1005 series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP LaserJet</td>
        <td>HP LaserJet 1020 series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP Color</td>
        <td>HP Color LaserJet Pro M280-M281 MFP</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP Color LaserJet</td>
        <td>HP Color LaserJet Pro MFP M478-M479</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP OfficeJet 3830 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP OfficeJet 5200 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP OfficeJet Pro 8710 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP OfficeJet Pro 6970 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP OfficeJet 4650 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP OfficeJet Pro 9010 All-in-One series</td>
        
      </tr>
      <tr class="table-secondary">
        <td>HP OfficeJet</td>
        <td>HP Officejet Pro 8610 e-All-in-One series</td>
        
      </tr>
    </tbody>
  </table>
  <br></br><br></br><br></br><br></br><br></br>
  <h1 style={{fontSize:"40px",textAlign:"center",backgroundColor:"black",color:"white",width:"50%",marginLeft:"25%"}}>what we Support</h1>
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
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div class="footerr">


<strong><p>Support for hp Printers</p></strong>
  <strong><p>Support for Canon printers</p></strong>
    <strong><p>Support for Lexmark printers</p></strong>
    <strong><p>Support for EPSON printers</p></strong>

    <strong><p>Support for Brother printers</p></strong>

    <strong><p>problems in  hp printers</p></strong>
    <strong><p>problems in canon printers</p></strong>

    <strong><p>problems in Lexmark hp printers</p></strong>
    <strong><p>problems in EPSON printers</p></strong>
  <strong><p>problems in Brother printers</p></strong>
    <strong><p>Support for All printers</p></strong>
    <strong><p>Support for  printers</p></strong>
</div>
</div>



    </>
    
  )
}
export default HpPrinters


  
