const nodemailer = require("nodemailer");

// Set up the email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "lawrence@mathabit.com",
    pass: "a3vFYb9!"
  }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
  from: '"Kewl Guy " <lawrence@mathabit.com>', // sender address (who sends)
  to: "lawrence.xie90@gmail.com", // list of receivers (who receives)
  subject: "Testing", // Subject line
  text: "Hello world ", // plaintext body
  html: "<b>Hello world </b><br> Email sent with Nodemailer in Node.js" // html body
};

const orderApi = app => {
  app.get("/order", (req, res) => {
    res.send({
      message: "Submit orders here"
    });
  });

  app.post("/order", (req, res) => {
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });

    res.send("form submitted");
  });

  return app;
};

module.exports = orderApi;
