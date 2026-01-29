import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCTA } from "./MobileCTA";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
