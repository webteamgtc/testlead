import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../[locale]/config/nodemailer";
import { emailTempletesArabic, emailTempletesEnglish, emailTempleteSwitchArabic, emailTempleteSwitchEnglish } from "./templetes";

const generateEmailContent = (data) => {
  if (data?.locale == "ar") {
    if (data?.isPartnerPage) {
      return {
        html: `${emailTempletesArabic(data)}`
      }
    }
    else {
      return {
        html: `${emailTempleteSwitchArabic(data)}`
      }
    }

  } else {
    if (data?.isPartnerPage) {
      return {
        html: `${emailTempletesEnglish(data)}`
      }
    }
    else {
      return {
        html: `${emailTempleteSwitchEnglish(data)}`
      }
    }
  }
};

export async function POST(req) {
  const reqBody = await req.json();
  const mailOption = {
    from: '"GTCFX" <portal@mx4.gtcmail.com>',
    to: reqBody?.email,
  };
  try {
    await transporter.sendMail({
      ...mailOption,
      ...generateEmailContent(reqBody),
      subject: `Thank you for registering with GTC`,
    });
    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
