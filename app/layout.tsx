// STYLES
import "../styles/globals.css";
import "../styles/font.css";
import Footer from "./footer";
import Navbar from "../components/Navbar";

import { ContextNavbarProvider } from "../context/NavbarContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ContextNavbarProvider>
          <Navbar />
          {children}
        </ContextNavbarProvider>
        <Footer />
      </body>
    </html>
  );
}
