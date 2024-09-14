import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Suraksha",
  description: "It is a real-time monitoring and reporting application",
  openGraph: {
    title: "Suraksha",
    description: "It is a real-time monitoring and reporting application",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "./assets/logo2.png",
        width: 1200,
        height: 630,
        alt: "Suraksha Monitoring App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraksha",
    description: "It is a real-time monitoring and reporting application",
    images: ["/path-to-your-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
