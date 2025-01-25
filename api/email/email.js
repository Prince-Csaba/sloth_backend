import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.zoho.com",
  port: 465,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PW,
  },
  secure: true,
  // Other configuration options (e.g., from address, subject, etc.)
});

export default transporter;