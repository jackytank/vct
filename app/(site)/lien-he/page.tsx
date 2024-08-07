import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Trang liên hệ của Vườn Cổ Tích - Vườn Cổ Tích",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
