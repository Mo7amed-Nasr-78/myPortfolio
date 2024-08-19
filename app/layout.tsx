import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed's Portfolio",
  description: "",
  icons: './Logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
