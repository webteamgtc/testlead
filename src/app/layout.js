import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "UAE's Top Forex Partners Now Earn Up to 80% RevShare with GTC",
  description: "Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;@300;@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
