import nodemailer from "nodemailer";

const user = process.env.EMAIL as string;
const pass = process.env.EMAIL_PASSWORD as string;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export const mailOptions = {
  from: user,
  to: user,
};
