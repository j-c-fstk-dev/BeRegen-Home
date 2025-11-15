import { FadeIn } from "@/components/animated/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Layers, Film, Sparkles, Handshake } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "RegenHub — Impact, Identity & Ecological Intelligence",
    description: "The core of the ecosystem. Ecological diagnostics, impact tracking, regenerative identity and intelligence for SMEs, educators and local projects.",
    href: "/hub"
  },
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: "RegenFlix — Learning & Regenerative Media",
    description: "An educational and storytelling platform with courses, documentaries, learning pathways and field-based regenerative narratives.",
    href: "/flix"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "RegenApp — Habits for Regeneration",
    description: "A habits and micro-rituals app for daily regenerative actions that strengthen personal practice and contribute to the RegenScore.",
    href: "/app"
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "RegenFund — Community-Aligned Finance",
    description: "Future micro-grants, retroactive mechanisms and regenerative funding pathways aligned with community-verified impact.",
    href: "/fund"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="container">
          <FadeIn>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl mx-auto">
              BeRegen — Living Infrastructure for a Regenerative World
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              An open ecosystem connecting people, SMEs and communities to track, learn, coordinate and fund regenerative impact.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#ecosystem">
                Explore the Ecosystem
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/hub">
                Discover RegenHub (Phase 1) <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <FadeIn className="w-full" delay={0.3}>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">About BeRegen</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    BeRegen is a regenerative innovation foundation building living, open and interoperable infrastructure to support communities, small businesses, educators, environmental projects and citizens in regenerating life — at home, in their cities and across their territories.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our mission is to create the invisible structures that make regeneration scalable: ecological intelligence systems, coordination tools, reputation mechanisms, learning platforms and regenerative micro-economies.
                </p>
                 <p className="mt-4 text-lg text-muted-foreground font-medium">
                    BeRegen is not a single product — it is a living ecosystem designed to grow in layers.
                </p>
            </div>
        </section>
      </FadeIn>

      {/* Ecosystem Pillars Section */}
      <FadeIn className="w-full" delay={0.4}>
        <section id="ecosystem" className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
                The BeRegen Ecosystem
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A constellation of tools for regenerative learning, action, identity and community-aligned finance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="flex flex-col text-center">
                  <CardHeader className="items-center">
                    {pillar.icon}
                    <CardTitle className="mt-4 text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{pillar.description}</p>
                  </CardContent>
                   <CardFooter>
                      <Button variant="secondary" className="w-full" asChild>
                        <Link href={pillar.href}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* RegenHub Highlight Section */}
      <FadeIn className="w-full" delay={0.5}>
        <section className="py-24 sm:py-32 bg-primary/10">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">RegenHub — Phase 1 (Now Live • MVP)</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We are launching RegenHub, the first module of the BeRegen ecosystem — a space where anyone, any project or SME can register regenerative actions, complete ecological diagnostics, build reputation, receive AI-assisted validation and create public impact profiles.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild><Link href="/hub">Discover RegenHub <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                </div>
            </div>
             <div className="bg-background/50 border rounded-xl p-8 space-y-4">
                <p className="flex items-center gap-3 font-medium"><ArrowRight className="text-primary h-5 w-5"/> LEAP Ecological Diagnostic</p>
                <p className="flex items-center gap-3 font-medium"><ArrowRight className="text-primary h-5 w-5"/> Impact Wizard</p>
                <p className="flex items-center gap-3 font-medium"><ArrowRight className="text-primary h-5 w-5"/> AI Pre-Validation</p>
                <p className="flex items-center gap-3 font-medium"><ArrowRight className="text-primary h-5 w-5"/> Regenerative Identity Layer</p>
                <p className="flex items-center gap-3 font-medium"><ArrowRight className="text-primary h-5 w-5"/> Public Impact Profiles</p>
             </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
