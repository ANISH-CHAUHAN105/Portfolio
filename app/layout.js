import Header from "./components/Header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anish Chauhan | Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Anish Chauhan | Portfolio</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self'; 
            script-src 'self' 'unsafe-inline' https://vercel.com https://www.googletagmanager.com https://www.google-analytics.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' data: https://vercel.com;
            connect-src 'self' https://vercel.com https://www.google-analytics.com;
            frame-src 'none';
          "
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] bg-gray-900 text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
