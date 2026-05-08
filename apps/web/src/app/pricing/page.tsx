import type { Metadata } from "next";
import PricingPage from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing - HageStack",
  description:
    "Transparent website and systems pricing. Choose Basic website, Advanced website, or Systems (Enterprise) with custom pricing.",
};

export default function Page() {
  return <PricingPage />;
}
