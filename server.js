const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Contact Email Setup ---
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error with email configuration:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// --- Contact Route ---
app.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: `"${name}" <${email}>`,
    to: "utmsg1218@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Error sending message", error: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// --- Serve React frontend ---
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
