import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "60px" }}>{children}</main>
      <Footer />
    </div>
  );
}
