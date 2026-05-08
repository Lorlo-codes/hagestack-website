import type { Metadata } from "next";
import PortfolioPage from "@/views/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio - HageStack",
  description:
    "Explore our portfolio of successful IT projects across healthcare, retail, manufacturing, and more. Real results from custom software and security solutions.",
};

export default function Page() {
  return <PortfolioPage />;
}
