import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org', // Mailgun SMTP host
  port: 465,                   // SSL/TLS port
  secure: true,                // Use TLS
  auth: {
    user: 'portal@mx5.gtcmail.com', // Mailgun SMTP username
    pass: 'd31a2f69af2b795ef0a632f1b11c79d1-653fadca-a3eb0f11', // Mailgun SMTP password
  },
});

export const mailOptions = {
    from: "portal@mx5.gtcmail.com",
    to:"zeeshan@gtcfx.com",  
    bcc: 'mohammad.zeeshan@gtcfx.com',
}