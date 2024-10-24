import React from "react";
import './globals.css';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'Enleads',
  description: 'Enleads',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Banner /> {/* Ensure Banner component does not expect any props */}
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
