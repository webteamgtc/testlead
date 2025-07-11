// Temporary in-memory storage for OTPs (same as used in sendOtp)
 import { getOtp, deleteOtp } from '../otpStorage'

export async function POST(request) {
  const { phoneNumber, otp } = await request.json();

  if (!phoneNumber || !otp) {
    return new Response(JSON.stringify({ message: 'Phone number and OTP are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Retrieve stored OTP
  const storedOtp = await getOtp(phoneNumber);
  console.log("storedOtp", storedOtp)
  if (storedOtp === otp) {
    console.log("matched");
    // OTP is valid, delete it from storage after successful verification
     deleteOtp(phoneNumber)
    return new Response(JSON.stringify({ success: true, message: 'OTP verified successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    // OTP is incorrect or expired
    return new Response(JSON.stringify({ success: false, message: 'Invalid or expired OTP' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}