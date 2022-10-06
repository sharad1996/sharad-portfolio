const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 4000;
const config = require("./config");
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ankit.guptamic@gmail.com",
    pass: "okeyiszfczpygdbb",
  },
});

app.post("/text_mail", (req, res) => {
  const { to, subject, text, html } = req.body;
  const mailData = {
    from: "ankit.guptamic@gmail.com", // sender address
    to: "agupta@technomatz.com", // list of receivers
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
        message: "Thank you for registration. My team will contact you",
        message_id: "info.messageId",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
