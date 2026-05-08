import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "HageStack - Professional IT solutions for modern businesses",
  description:
    "Expert software development, custom systems, security solutions, and IT consulting services. Building secure, scalable technology for businesses.",
};

export default function Page() {
  return <HomePage />;
}
