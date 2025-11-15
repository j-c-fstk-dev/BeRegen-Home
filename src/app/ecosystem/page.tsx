import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpenText, Handshake, Layers, Leaf, Network, Users, PenTool, Trees, Shield } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "RegenHub — Impact, Identity & Ecological Intelligence",
    description: "RegenHub is the core of the BeRegen ecosystem. It provides ecological diagnostics (LEAP), regenerative identity, reputation building, AI-assisted validation, impact submissions and public profiles for SMEs, educators, local projects and regenerative citizens. RegenHub is where regenerative action becomes visible, verifiable and fundable.",
  },
  {
    icon: <BookOpenText className="h-8 w-8 text-primary" />,
    title: "RegenFlix — Learning, Storytelling & Regenerative Knowledge",
    description: "RegenFlix is our storytelling and educational engine. It hosts courses, documentaries, learning pathways, regenerative fieldwork, community stories and media that help people understand and practice regeneration. It brings context, culture and narrative to the data generated in RegenHub.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "RegenApp — Habits for Regeneration",
    description: "RegenApp is a habits and micro-actions application designed to guide people into daily regenerative practice. Small rituals, breathing, nature-connection moments and micro-actions cultivate regenerative presence and increase the RegenScore. It connects personal practice with community-level impact.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "RegenFund — Community-Aligned Finance",
    description: "RegenFund is our future financial layer. It will support mini-grants, community funding, regenerative investments and retroactive mechanisms backed by verified impact and regenerative identity. It aligns capital with ecological value and community-validated actions.",
  }
];

const principles = [
    { icon: <Trees/>, title: "Local-first", description: "We prioritize small places, small producers, small communities and grounded ecological impact." },
    { icon: <Users/>, title: "Human-centered", description: "Technology amplifies human presence — it never replaces it." },
    { icon: <Network/>, title: "Interoperable", description: "We build with open standards, verifiable credentials, attestations and public goods." },
    { icon: <Shield/>, title: "Regenerative-by-design", description: "Everything we build must restore, replenish or reconnect life." },
    { icon: <PenTool/>, title: "Accessible", description: "Our tools must serve real people: SMEs, educators, families and local projects." },
]

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        title="The BeRegen Ecosystem"
        description="A living, modular infrastructure that supports regenerative action, identity, learning and community-aligned finance."
      />
       <div className="container text-center py-8">
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                <Link href="/hub">
                    Explore RegenHub
                </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                <Link href="/foundation">
                    Learn About Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
            </FadeIn>
        </div>

      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">What is BeRegen?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    BeRegen is a regenerative innovation ecosystem designed to support people, small businesses, educators and local communities in regenerating life at every scale — from individual habits to territory-wide ecological transformation.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                    Instead of building a single product, we are building an interconnected constellation of tools that work together: ecological diagnostics, regenerative identity, AI-assisted validation, storytelling, habit cultivation and community-aligned finance.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                    Each module can stand alone, but together they create a living regenerative infrastructure.
                </p>
            </div>
        </section>
      </FadeIn>
      
      <FadeIn>
        <section id="pillars" className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
                The Four Pillars
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="flex flex-col text-left">
                  <CardHeader>
                    {pillar.icon}
                    <CardTitle className="mt-4 text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      
      <FadeIn>
        <section className="py-24 sm:py-32 bg-primary/10">
          <div className="container text-center max-w-3xl mx-auto">
             <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">A Living System — How the Ecosystem Works Together</h2>
             <p className="mt-4 text-lg text-muted-foreground">
                Each BeRegen module is powerful on its own, but the ecosystem becomes truly alive when the modules interact.
             </p>
             <p className="mt-4 text-lg text-muted-foreground">
                <strong>RegenHub</strong> produces verified impact, identity and ecological intelligence.<br/>
                <strong>RegenFlix</strong> transforms this impact into stories, education and cultural learning.<br/>
                <strong>RegenApp</strong> brings regeneration into daily life through habits and micro-actions.<br/>
                <strong>RegenFund</strong> creates the financial pathways that reward, sustain and scale regenerative action.
             </p>
             <p className="mt-4 text-lg text-muted-foreground font-semibold">
                Together, they form a living regenerative infrastructure.
             </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Our Design Principles</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {principles.map(p => (
                        <div key={p.title} className="flex flex-col items-center text-center">
                            <div className="bg-card border p-4 rounded-full mb-4 text-primary">{p.icon}</div>
                            <h3 className="font-headline text-lg font-semibold">{p.title}</h3>
                            <p className="mt-2 text-muted-foreground text-sm">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>

    </>
  );
}
