import type { ReactNode } from "react";
import Footer from "../components/home/footer";
import Header from "../components/ui/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

