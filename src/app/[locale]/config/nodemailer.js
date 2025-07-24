import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtpdm-eu-central-1.aliyuncs.com', // Mailgun SMTP host
  port: 465,                   // SSL/TLS port
  secure: true,                // Use TLS
  auth: {
    user: 'portal@mx3.gtcmail.com', // Mailgun SMTP username 
    pass: 'GtCmailer123', // Mailgun SMTP password
  },
});

export const mailOptions = {
    from: "portal@mx3.gtcmail.com",
    to:"zeeshan@gtcfx.com",  
    bcc: 'mohammad.zeeshan@gtcfx.com',
}


export const mailOptionsJobs = {
    from: "portal@mx3.gtcmail.com",
    to:"careers@gtcfx.com",
    bcc: 'zeeshan@gtcfx.com',
}


