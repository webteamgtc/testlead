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
  title: "Become a GTC Partner in the UAE Today",
  description: "Join GTC as an Partner in the UAE. Earn up to 80% RevShare, offer top bonuses to traders, and grow with a regulated global broker.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;@300;@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
