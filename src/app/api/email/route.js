import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '../../config/nodemailer';

const generateEmailContent = (data) => {
    return {
        html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GTC OTP Email</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f8f8f8;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8; padding: 30px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius: 6px; padding: 40px 30px;">
            <!-- Logo -->
            <tr>
              <td align="left" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Logo" style="width: 120px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size: 24px; font-weight: bold; color: #192055; padding-bottom: 10px;">
                Welcome to GTC, ${data?.nickname || ""}!
              </td>
            </tr>

            <!-- Subheading -->
            <tr>
              <td style="font-size: 15px; color: #192055; font-weight: 600; padding-bottom: 10px;">
                Thank you for registering with GTC. Below are your account credentials:
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="border-bottom: 2px solid #e4e4e4; padding-bottom: 20px;"></td>
            </tr>

            <!-- User Credentials Table -->
            <tr>
  <td style="padding: 20px 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 14px; color: #192055; border: 1px solid #ddd; border-collapse: collapse;">
      <tr style="background-color: #f5f5f5;">
        <th align="left" colspan="2" style="padding: 10px; border-bottom: 1px solid #ddd; font-size: 15px; background-color: #f5f5f5; color: #192055;">
          Your GTC Portal Credentials
        </th>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">👤 Username (Email):</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">${data?.email}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">🔐 Password:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">${data?.password}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">🔗 Portal Link:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
          <a href="https://web.mygtc.app/login/login" style="color: #b68756; text-decoration: underline;">G-Trader Portal</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px; border-right: 1px solid #ddd;">📌 Platform Name:</td>
        <td style="padding: 10px;">G-Trader Portal</td>
      </tr>
    </table>
  </td>
</tr>

            <!-- Info -->
            <tr>
              <td style="font-size: 14px; color: #192055; line-height: 1.6; padding-top: 10px;">
                📞 Need help? <br><br>
                Reach us at <a href="tel:+9711800667788" style="color: #b68756; text-decoration: underline;">+971 1800667788</a> or email <a href="mailto:support@gtcfx.com" style="color: #b68756; text-decoration: underline;">support@gtcfx.com</a>.
              </td>
            </tr>

            <!-- Signature -->
            <tr>
              <td style="font-size: 14px; color: #192055; padding-top: 20px;">
                Best regards,<br/>
                <strong>Your GTC Team</strong>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="border-bottom: 2px solid #e4e4e4; padding: 30px 0;"></td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding-top: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Logo" style="width: 100px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu, Company License Number: 40354.
    <br/><br/>
    GTC Global Ltd and GTC Global Trade Capital Co. Limited belong to the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    Investing in derivative products carries significant risks and may not be suitable for all investors. Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.
    <br/><br/>
    GTC Global Ltd and GTC Global Trade Capital Co. Limited do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulation.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Other Group Entities:</strong><br/>
    The financial products and services offered on this website are <u>NOT</u> provided by the following group entities, and no recourse against the following entities is available. If you are interested in the products and services offered by each of the following entities, please visit their respective websites.
    <br/><br/>
    <strong>GTC Group LLC-FZ</strong> is a holding company incorporated in Dubai, United Arab Emirates with Business License Number: 2311147.01. Its registered office is at Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong>GTC Multi Trading DMCC</strong> is a limited company licensed and incorporated under the laws of the Dubai Multi Commodities Centre (No. DMCC-312687) and licensed by the Securities and Commodities Authority, United Arab Emirates (No. 202200000007) to practice the activity of Commodity Brokerage - Trading and Clearing. Registered Address: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Each of the entities within the GTC Financial Group is managed separately. The financial products and services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
    <br/><br/>
    All trademarks are the property of their respective owners. All rights reserved. GTC Global Ltd is part of the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    <strong>Risk Warning:</strong> Trading leveraged products such as forex and derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved and seek independent advice if necessary.
  </td>
</tr>
              <td align="center" style="padding: 20px; font-size: 12px; color: #999;">
                © Copyright 2025 GTCFX – All Rights Reserved
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

      
      `,
    };
};



export async function POST(req) {
    const reqBody = await req.json();
    const mailOption = {
        from: "portal@mx2.gtcmail.com",
        to: reqBody?.email,
    }
    try {
        await transporter.sendMail({
            ...mailOption,
            ...generateEmailContent(reqBody),
            subject: `Thank you for registering with GTC`
        });
        return NextResponse.json({ message: "Success", email: reqBody?.email }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}