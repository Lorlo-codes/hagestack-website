import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact us - HageStack",
  description:
    "Get in touch with HageStack for IT consulting, software development, or security solutions. We respond to all inquiries within 24 hours.",
};

export default function Page() {
  return <ContactPage />;
}
