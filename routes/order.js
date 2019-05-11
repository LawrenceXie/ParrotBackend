const nodemailer = require("nodemailer");

// Set up the email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "orders@packageparrot.com",
    pass: "Cheese123"
  }
});

// setup e-mail data, even with unicode symbols

const orderApi = app => {
  app.get("/order", (req, res) => {
    res.send({
      message: "Submit orders here"
    });
  });

  app.post("/order", (req, res) => {
    var mailOptions = {
      from: '"Package Parrot Orders" <orders@packageparrot.com>',
      to: req.body.email,
      bcc: "orders@packageparrot.com",
      subject: "Package Parrot Order Confirmation",
      //text: "Hello world ", // plaintext body
      html:
        "Hi " +
        req.body.name +
        ",<br>" +
        'We are checking to see if your item is available:<br><a href="' +
        req.body.itemLink +
        '">' +
        req.body.itemLink +
        "</a><br><br>To be delivered at:<br>" +
        req.body.address +
        "<br><br>We'll be in touch soon to confirm item availability and delivery times.<br><br>Package Parrot"
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });

    res.status(200).send("form submitted");
  });

  return app;
};

module.exports = orderApi;
