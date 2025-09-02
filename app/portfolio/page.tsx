import type { Metadata } from "next"
import PortfolioClientPage from "./PortfolioClientPage"

export const metadata: Metadata = {
  title: "Portfolio & Capabilities",
  description:
    "Explore Photon's design and engineering capabilities through our portfolio of successful projects across commercial and government sectors.",
}

export default function PortfolioPage() {
  return <PortfolioClientPage />
}
