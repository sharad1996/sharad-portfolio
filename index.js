const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 4000;
var cors = require("cors");
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

app.post("/text_mail", (req, res) => {
  const { email, subject, html } = req.body;
  console.log(req.body, 'email', process.env.RECIVER_EMAIL);
  const mailData = {
    from: email, // sender address
    to: process.env.RECIVER_EMAIL, // list of receivers
    subject,
    // text,
    html,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send({
        message: "Thank you for reaching out to me. I will contact you",
        message_id: "info.messageId",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
