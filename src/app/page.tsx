import { FadeIn } from "@/components/animated/fade-in";
import EcosystemMap from "@/components/sections/ecosystem-map";
import HeroHome from "@/components/sections/hero-home";
import ImpactStats from "@/components/sections/impact-stats";
import LatestUpdates from "@/components/sections/latest-updates";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import SupportChannels from "@/components/sections/support-channels";
import WhatWeDo from "@/components/sections/what-we-do";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroHome />
      <FadeIn className="w-full container" delay={0.2}>
        <EcosystemMap />
      </FadeIn>
      <FadeIn className="w-full" delay={0.3}>
        <WhatWeDo />
      </FadeIn>
      <FadeIn className="w-full" delay={0.4}>
        <ImpactStats />
      </FadeIn>
      <FadeIn className="w-full" delay={0.5}>
        <SupportChannels />
      </FadeIn>
      <FadeIn className="w-full" delay={0.6}>
        <LatestUpdates />
      </FadeIn>
      <FadeIn className="w-full" delay={0.7}>
        <NewsletterSignup />
      </FadeIn>
    </div>
  );
}
