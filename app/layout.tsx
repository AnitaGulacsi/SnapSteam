import type { Metadata } from "next";
import "@/public/styles/globals.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "SnapStream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
