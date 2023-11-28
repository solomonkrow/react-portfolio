import express, { Router, json } from 'express';
const router = Router();
import cors from 'cors';
import { createTransport } from 'nodemailer';

const app = express();
app.use(cors());
app.use(json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = createTransport({
    service: 'hotmail',
    auth: {
      user: "solomonkrow@outlook.com",
      pass: "",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "solomonkrow@outlook.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });