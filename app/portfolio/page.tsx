import type { Metadata } from "next"
import PortfolioClientPage from "./PortfolioClientPage"

export const metadata: Metadata = {
  title: "Portfolio & Capabilities",
  description:
    "Explore Echo's design and engineering capabilities showcasing our fresh approach to complex challenges with cutting edge tools and innovative solutions.",
}

export default function PortfolioPage() {
  return <PortfolioClientPage />
}
