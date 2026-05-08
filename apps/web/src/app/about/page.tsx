import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About us - HageStack",
  description:
    "Learn about HageStack's mission, values, and team. Professional IT services and software development since 2018.",
};

export default function Page() {
  return <AboutPage />;
}
