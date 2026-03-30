import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ADAM - Adaptation Module",
  description: "ADAM is a student-led initiative dedicated to helping international, exchange, and local students adapt to life in Kazakhstan. We provide resources, organize events, and build a supportive community.",
  keywords: ["ADAM", "Adaptation Module", "Kazakhstan", "International Students", "Exchange Students", "Local Students", "Community", "Events", "Resources"],
  authors: [{ name: "ADAM", url: "https://adam.kz" }],
  creator: "ADAM",
  publisher: "ADAM",
  openGraph: {
    title: "ADAM - Adaptation Module",
    description: "ADAM is a student-led initiative dedicated to helping international, exchange, and local students adapt to life in Kazakhstan. We provide resources, organize events, and build a supportive community.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
