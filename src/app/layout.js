import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Store",
  description: "Best Store for Books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "rgba(15, 23, 42, 0.9)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
