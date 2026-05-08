import type { Metadata } from "next";
import ServicesPage from "@/views/ServicesPage";

export const metadata: Metadata = {
  title: "Services - HageStack",
  description:
    "Comprehensive IT services including web development, custom systems, security solutions, and consulting. Expert technology solutions for your business.",
};

export default function Page() {
  return <ServicesPage />;
}
