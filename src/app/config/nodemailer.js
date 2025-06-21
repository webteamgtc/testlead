import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtpdm-eu-central-1.aliyuncs.com', // SMTP host
    port: 465, // Port for secure connection (usually 465 for SSL/TLS)
    secure:true,
    auth: {
        user: 'portal@mx2.gtcmail.com', // SMTP username
        pass: 'MailerGTC12', // SMTP password
    },
});

export const mailOptions = {
    from: "portal@mx2.gtcmail.com",
    to:"zeeshan@gtcfx.com", 
    bcc: 'mohammad.zeeshan@gtcfx.com',
}


export const mailOptionsJobs = {
    from: "portal@mx2.gtcmail.com",
    to:"careers@gtcfx.com",
    bcc: 'zeeshan@gtcfx.com',
}


