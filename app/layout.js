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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] bg-gray-900 text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Analytics /> {/* Vercel Analytics */}
          <SpeedInsights /> {/* Vercel Speed Insights */}
        </ThemeProvider>
      </body>
    </html>
  );
}
