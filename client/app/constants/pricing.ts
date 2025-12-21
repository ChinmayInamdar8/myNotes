import { PricingBox } from "../components/mainPage/PricingBox";

export const pricing: PricingBox[] = [
  {
    title: "Free",
    amount: "₹0",
    features: [
      "Unlimited personal notes",
      "Basic collaboration",
      "Public sharing",
    ],
    isDefault: false,
  },
  {
    title: "Pro",
    amount: "₹299/mo",
    features: ["Team collaboration", "Private docs", "Version history"],
    isDefault: true,
  },
  {
    title: "Team",
    amount: "₹799/mo",
    features: ["Unlimited members", "Advanced permissions", "Priority support"],
    isDefault: false,
  },
];
