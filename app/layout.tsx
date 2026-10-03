import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Atelier 09 — Architecture & Design", description: "Thoughtful architecture shaped by light, material and human experience. Explore the work of Atelier 09.", viewport: "width=device-width, initial-scale=1" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
