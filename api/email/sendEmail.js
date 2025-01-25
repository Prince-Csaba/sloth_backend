import nodemailer from "nodemailer";
import transporter from "./email";

const sendOfferDetailsEmail = async () => {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.zsebbaratkoltoztetes.hu",
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PW,
    },
    secure: true,
  });

  const mailOptions = {
    from: process.env.ZSB_EMAIL,
    to: "bolyaicsaba@gmail.com",
    subject: "Zsebbarát Költöztetés - Előzetes árajnálat igénylés adatai",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Zsebbarát költöztetés - előzetes árajánlat</title>
    </head>
<body style="width: 100%">
      <img style="margin: 10px auto 10px auto;" src="https://zsebbarat-smart.netlify.app/_next/image?url=logo.png&w=128&q=37" alt="">
      <h2 style="text-align: center;">Háztól házig, gond nélkül</h2>
      <div style="width: 90%; margin: auto">
        <h3>Köszönjük az érdeklődést!</h3>
        <p>A mi célunk bla bla</p>
        <p>Az Önnek generált személyre szóló árajánlat linkje:</p>
        <button style="  padding: 16px 32px 16px 32px;font-size: 1rem;gap: 8px;border-radius: 64px;background-color: #46a086;
  color: white;display: inline-block;border: none;cursor: pointer;">
          <a style="text-decoration: none;color: white" href=http://localhost:3000/arajanlatok/online>Előzetes árajánlat megtekintése</a>
        </button>
        <p>Köszönjük hogy megtisztelt bizalmával, munkatársunk keresni fogja a megadott telefonszámon hamarosan.</p>
      </div>
    </body>
    </html>`,
  };



  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  
  console.log("Before sending email");
  
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent:");
  } catch (error) {
    console.error("Error sending email:", error);
  }

  console.log("After sending email");
};

export default sendOfferDetailsEmail;
