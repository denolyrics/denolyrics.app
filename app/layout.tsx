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
    <html lang="en" className="scroll-smooth">
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
