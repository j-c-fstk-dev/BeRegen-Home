import { FadeIn } from "@/components/animated/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Book, Bot, Briefcase, Handshake, Heart, Layers, Users } from "lucide-react";
import Link from "next/link";

const ecosystemPillars = [
    {
        icon: <Briefcase />,
        title: "Fieldwork & Documentation",
        description: "Capturing regenerative action on the ground.",
        href: "/ecosystem"
    },
    {
        icon: <Book />,
        title: "Regenerative Education",
        description: "Courses, stories, and learning pathways.",
        href: "/ecosystem"
    },
    {
        icon: <Users />,
        title: "Ecosystem Coordination",
        description: "Weaving projects and people together.",
        href: "/ecosystem"
    },
    {
        icon: <Layers />,
        title: "RegenHub (Future Layer)",
        description: "The digital infrastructure for impact.",
        href: "/hub"
    }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 text-center relative">
        <div className="container">
          <FadeIn>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-4xl mx-auto">
              Building Regenerative Infrastructure for a Thriving Planet
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
              BeRegen is a movement connecting people, communities, land-based projects and regenerative stewards across Latin America — with tools, storytelling and coordination designed for impact in motion.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-2xl shadow-sm">
              <Link href="/ecosystem">
                Explore Ecosystem
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-2xl shadow-sm">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <FadeIn className="w-full" delay={0.3}>
        <section className="py-24 sm:py-32 bg-card/80 backdrop-blur-sm border-y">
            <div className="container text-center max-w-3xl mx-auto">
                <p className="font-headline text-2xl md:text-3xl text-neutral-700">
                  Regeneration already exists everywhere — but it’s scattered, underfunded and disconnected. BeRegen was created to weave these pieces together into a living ecosystem: people, land, communities and technology aligned in service of planetary healing.
                </p>
                <p className="mt-6 text-lg text-neutral-600">
                  Our work begins now, on the road, documenting, connecting and giving visibility to regenerative action where it happens: directly on the ground.
                </p>
            </div>
        </section>
      </FadeIn>

      <FadeIn className="w-full" delay={0.4}>
        <section id="ecosystem" className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ecosystemPillars.map((pillar) => (
                <Card key={pillar.title} className="flex flex-col text-center transition-transform duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="items-center">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">{pillar.icon}</div>
                    <CardTitle className="mt-4 text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-neutral-600 text-sm">{pillar.description}</p>
                  </CardContent>
                  <div className="p-4">
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href={pillar.href}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn className="w-full" delay={0.5}>
        <section className="py-24 sm:py-32 bg-primary/10 backdrop-blur-sm">
          <div className="container text-center max-w-3xl mx-auto">
             <h2 className="font-headline text-3xl font-medium">Meet the Team</h2>
             <p className="mt-4 text-lg text-neutral-600">
               Meet the people shaping the first iteration of BeRegen — a team working directly from the road, traveling across Latin America while connecting regenerative communities.
             </p>
             <div className="mt-8">
                <Button size="lg" asChild><Link href="/team">About Us <ArrowRight/></Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn className="w-full" delay={0.6}>
        <section className="py-24 sm:py-32">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-medium">Early Supporters</h2>
            <p className="mt-4 text-lg text-neutral-600">Support the movement and help us build the regenerative future. Your contribution directly funds our fieldwork and tool development.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader><CardTitle>Patreon</CardTitle></CardHeader>
                    <CardContent><Button asChild className="w-full"><Link href="https://www.patreon.com/BeRegen" target="_blank">Support <Heart /></Link></Button></CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader><CardTitle>Giveth</CardTitle></CardHeader>
                    <CardContent><Button asChild className="w-full"><Link href="https://giveth.io/project/beregen" target="_blank">Donate <Handshake /></Link></Button></CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader><CardTitle>RegenStore</CardTitle></CardHeader>
                    <CardContent><Button asChild className="w-full"><Link href="https://www.etsy.com/pt/shop/BeRegenStore" target="_blank">Shop <Bot /></Link></Button></CardContent>
                </Card>
            </div>
            <Button asChild variant="secondary" className="mt-8"><Link href="/community">See All Ways to Support</Link></Button>
          </div>
        </section>
      </FadeIn>

      <FadeIn className="w-full" delay={0.7}>
        <section className="py-24 sm:py-32 bg-card/80 backdrop-blur-sm border-y">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-medium">Get Involved</h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Whether you are a land steward, a regenerative project, a researcher, or someone who wants to support the movement, you can join BeRegen from the very beginning.
                </p>
                <div className="mt-6 text-left space-y-2 inline-block">
                  <p className="flex items-center gap-2"><ArrowRight className="text-primary"/>Become a partner</p>
                  <p className="flex items-center gap-2"><ArrowRight className="text-primary"/>Join as a volunteer steward (validator)</p>
                  <p className="flex items-center gap-2"><ArrowRight className="text-primary"/>Sign up for early access to RegenHub</p>
                </div>
                <p className="mt-4 text-neutral-600">Use the contact page to send your interest.</p>
                 <div className="mt-8">
                    <Button size="lg" asChild><Link href="/contact">Get in Touch</Link></Button>
                 </div>
            </div>
        </section>
      </FadeIn>
      
      <FadeIn className="w-full" delay={0.8}>
        <section className="py-24 sm:py-32">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-medium">Be part of the first chapter of a regenerating world.</h2>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild><Link href="/ecosystem">Explore the Ecosystem</Link></Button>
                    <Button size="lg" variant="outline" asChild><Link href="/team">Meet the Team</Link></Button>
                    <Button size="lg" variant="outline" asChild><Link href="/hub">Discover RegenHub</Link></Button>
                </div>
            </div>
        </section>
      </FadeIn>
    </div>
  );
}
