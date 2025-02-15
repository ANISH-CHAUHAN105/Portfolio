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
  description: "Welcome to my portfolio website showcasing projects built with Next.js, React, and Tailwind CSS.",
  openGraph: {
    title: "Anish Chauhan | Portfolio",
    description: "A modern portfolio featuring web development projects.",
    url: "https://portfolio-one-azure-47.vercel.app/",
    siteName: "Anish Chauhan Portfolio",
    images: [
      {
        url: "/anish.jpg", 
        width: 800,
        height: 600,
        alt: "Anish Chauhan Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Chauhan | Portfolio",
    description: "Showcasing projects built with Next.js, React, and Tailwind CSS.",
    images: ["/anish.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <meta
  httpEquiv="Content-Security-Policy"
  content="
    default-src 'self'; 
    script-src 'self' 'unsafe-inline' 'unsafe-eval' 
      https://vercel.com 
      https://www.googletagmanager.com 
      https://www.google-analytics.com
      https://checkout.razorpay.com
      https://clerk.dev
      https://*.clerk.dev
      https://noted-frog-19.clerk.accounts.dev;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https://vercel.com;
    connect-src 'self' 
      https://vercel.com 
      https://www.google-analytics.com 
      https://api.clerk.dev 
      https://noted-frog-19.clerk.accounts.dev
      https://lumberjack.razorpay.com
      https://checkout.razorpay.com
      https://api.razorpay.com;
    frame-src 'self' https://checkout.razorpay.com https://api.razorpay.com;
    worker-src 'self' blob:;
    child-src 'self' blob:;
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
