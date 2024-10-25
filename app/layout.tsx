// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Keep your global styles including Poppins import

export const metadata: Metadata = {
  title: "Your Portfolio Title",
  description: "Description of your portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
