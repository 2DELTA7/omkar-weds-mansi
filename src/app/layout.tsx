import type { Metadata } from "next";
import { Marcellus, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://omkar-weds-mansi.vercel.app"
  ),
  title: "Dr. Omkar & Dr. Mansi | Wedding Invitation",
  description:
    "With immense joy and gratitude, we invite you to celebrate the wedding of Dr. Omkar and Dr. Mansi.",
  openGraph: {
    title:
      "Dr. Omkar & Dr. Mansi | Wedding Invitation",
    description:
      "Join us in celebrating our special day and bless us with your presence.",
    url:
      "https://omkar-weds-mansi.vercel.app",
    siteName:
      "Omkar Weds Mansi",
    images: [
      {
        url: "https://omkar-weds-mansi.vercel.app/preview-image1.jpg",
        width: 1200,
        height: 630,
        alt:
          "Omkar Weds Mansi Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${greatVibes.variable}`}
      >
        {children}
      </body>
    </html>
  );
}