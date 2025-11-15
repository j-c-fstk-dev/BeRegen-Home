import { FadeIn } from "@/components/animated/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Layers, Film, Sparkles, Handshake, BookOpenText } from "lucide-react";
import Link from "next/link";
import { ecosystemLinks } from "@/lib/nav-links";

const pillarIcons: { [key: string]: React.ReactNode } = {
  RegenHub: <Layers className="h-8 w-8 text-primary" />,
  RegenFlix: <Film className="h-8 w-8 text-primary" />,
  RegenApp: <Sparkles className="h-8 w-8 text-primary" />,
  RegenFund: <Handshake className="h-8 w-8 text-primary" />,
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="container">
          <FadeIn>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-4xl mx-auto">
              BeRegen — Living Infrastructure for a Regenerative World
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
              An open ecosystem connecting people, SMEs and communities to track, learn, coordinate and fund regenerative impact.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/ecosystem">
                Explore the Ecosystem
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/hub">
                Discover RegenHub (Phase 1)
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <FadeIn className="w-full" delay={0.3}>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-medium">About BeRegen</h2>
                <div className="mt-4 text-lg text-neutral-600 space-y-4">
                  <p>
                      BeRegen is a regenerative innovation foundation building living, open and interoperable infrastructure to support communities, small businesses, educators, environmental projects and citizens in regenerating life — at home, in their cities and across their territories.
                  </p>
                  <p>
                      Our mission is to create the invisible structures that make regeneration scalable: ecological intelligence systems, coordination tools, reputation mechanisms, learning platforms and regenerative micro-economies.
                  </p>
                  <p className="text-neutral-900">
                      BeRegen is not a single product — it is a living ecosystem designed to grow in layers.
                  </p>
                </div>
            </div>
        </section>
      </FadeIn>

      <FadeIn className="w-full" delay={0.4}>
        <section id="ecosystem" className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-medium">
                The BeRegen Ecosystem
              </h2>
              <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                A constellation of tools for regenerative learning, action, identity and community-aligned finance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ecosystemLinks.map((pillar) => (
                <Card key={pillar.name} className="flex flex-col text-center transition-transform duration-300 hover:scale-105">
                  <CardHeader className="items-center">
                    {pillarIcons[pillar.name] || <BookOpenText className="h-8 w-8 text-primary" />}
                    <CardTitle className="mt-4 text-xl">{pillar.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-neutral-600 text-sm">{pillar.description}</p>
                  </CardContent>
                   <CardFooter>
                      <Button variant="secondary" className="w-full" asChild>
                        <Link href={pillar.href}>
                          Learn More <ArrowRight />
                        </Link>
                      </Button>
                    </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn className="w-full" delay={0.5}>
        <section className="py-24 sm:py-32 bg-primary/10">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-headline text-3xl font-medium">RegenHub — Phase 1 (Now Live • MVP)</h2>
                <p className="mt-4 text-lg text-neutral-600">
                    We are launching RegenHub, the first module of the BeRegen ecosystem — a space where anyone, any project or SME can register regenerative actions, complete ecological diagnostics, build reputation, receive AI-assisted validation and create public impact profiles.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild><Link href="/hub">Discover RegenHub <ArrowRight /></Link></Button>
                </div>
            </div>
             <div className="bg-background/50 border rounded-xl p-8 space-y-4">
                <p className="flex items-center gap-3 text-neutral-900"><ArrowRight className="text-primary"/> LEAP Ecological Diagnostic</p>
                <p className="flex items-center gap-3 text-neutral-900"><ArrowRight className="text-primary"/> Impact Wizard</p>
                <p className="flex items-center gap-3 text-neutral-900"><ArrowRight className="text-primary"/> AI Pre-Validation</p>
                <p className="flex items-center gap-3 text-neutral-900"><ArrowRight className="text-primary"/> Regenerative Identity Layer</p>
                <p className="flex items-center gap-3 text-neutral-900"><ArrowRight className="text-primary"/> Public Impact Profiles</p>
             </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
