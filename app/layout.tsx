import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneStream — Governed Finance AI",
  description: "Finance AI you can defend. SensibleAI™ Agents built into OneStream, Excel, and your AI stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
