import React from 'react'
import { Helmet} from 'react-helmet-async';

import emailjs from 'emailjs-com'
const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
   
    emailjs.sendForm('service_u111as8','template_p1zikpk',e.target,'MMQs9vXF5NiPb-mlm'
    ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err))
    alert("Message Sent,  We Will Reply Soon ")
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
        <link rel="https://chattotech.com" href="/contact"></link>
        <meta
          name="keywords"
          content="support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers"
        ></meta>
      </Helmet>
<div className='container border' style={{marginTop:"50px",width:"100%",height:"600px",borderRadius:"15px",backgroundImage:`url('https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg')` 
,backgroundPosition:"center",
backgroundSize:"cover"
}}>
  <h1 style={{marginTop:"30px",color:"white"}}>Contact Form</h1>
  <form className='row' style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
<lable style={{fontSize:"30px",color:"white"}}>Name</lable>
<input type='text' name="name" className='form-control'></input>
<lable style={{fontSize:"30px",color:"white"}}>Email</lable>
<input type='email' name="user_email" className='form-control'></input>
<lable style={{fontSize:"30px",color:"white"}}>Message</lable>
<textarea name='message' rows='4' className='form-control'></textarea>
<input type='submit' value='send'  className='form-control btn btn-primary' style={{marginTop:"30px",fontSize:"20px",color:"black",backgroundColor:"lightblue"}}>
  
</input>

</form>
 
 

<div>
  
</div>
 <br></br><br></br>
<h1 style={{color:"white"}}>what we Support</h1>
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

             
            


<strong><p>support for hp Printers</p></strong>
  <strong><p>support for Canon printers</p></strong>
    <strong><p>support for Lexmark printers</p></strong>
    <strong><p>support for EPSON printers</p></strong>

    <strong><p>support for Brother printers</p></strong>

    <strong><p>problems in  hp printers</p></strong>
    <strong><p>problems in canon printers</p></strong>

    <strong><p>problems in Lexmark hp printers</p></strong>
    <strong><p>problems in EPSON printers</p></strong>
  <strong><p>problems in Brother printers</p></strong>
    <strong><p>support for All printers</p></strong>
    <strong><p>support for  printers</p></strong>

</div>
<br></br><br></br><br></br><br></br><br></br>
    </div>
    
    </div>
    
  )
}

export default Contact