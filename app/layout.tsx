import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acote AI",
  description: "Next-generation AI solutions for the modern enterprise",
  openGraph: {
    title: "Acote AI",
    description: "Next-generation AI solutions for the modern enterprise",
    url: "https://acote-ai.com",
    siteName: "Acote AI",
    images: [
      {
        url: "https://acote-ai.com/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Acote AI OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acote AI",
    description: "Next-generation AI solutions for the modern enterprise",
    images: ["https://acote-ai.com/og-image.png"], 
    creator: "@your_twitter_handle",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
