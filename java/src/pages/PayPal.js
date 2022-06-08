import React, { useRef, useEffect } from "react";
import { Helmet} from 'react-helmet-async';

export default function Paypal() {
  
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code:"USD",
                  value:1.00,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
    <Helmet>
<title>Pay With Safety</title>
<meta name="description"
content="support for printers,support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers"
 />
<meta name="keywords" content='support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers-support for hp printers-support for brother printers-support for canon printers-support for lexmark printers-support for epson printers'></meta>

</Helmet>
    <div className="paypal">
      <div ref={paypal}></div>
     
      <br></br><br></br><br></br><br></br><br></br>
      </div>
     

</div>
   
  );
}