import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, UserRound, School, Building, ListChecks, Wand2, Bot, ShieldCheck, User, Users, BrainCircuit, FileText, Globe2, IdCard, Share2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const whoIsItFor = [
    { 
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Small & Medium Enterprises", 
        description: "SMEs that want to understand their ecological footprint, improve their practices, build regenerative reputation and prepare for grants or green financing."
    },
    { 
        icon: <School className="h-8 w-8 text-primary" />, 
        title: "Educators & Schools", 
        description: "Teachers, schools and learning communities that are integrating regenerative projects, outdoor education and ecological practices into everyday learning."
    },
    { 
        icon: <Users className="h-8 w-8 text-primary" />, 
        title: "Local Projects & Community Initiatives", 
        description: "Grassroots projects, agroecology initiatives, smallholder farmers and community spaces that need a simple way to register, validate and share their impact."
    },
    {
        icon: <User className="h-8 w-8 text-primary" />,
        title: "Regenerative Citizens",
        description: "People who are already taking regenerative actions in their daily lives and want a place to document, grow and connect their impact."
    }
];

const coreModules = [
    {
        icon: <ListChecks className="h-8 w-8 text-primary" />,
        title: "LEAP Ecological Diagnostic",
        description: "A guided ecological diagnostic inspired by LEAP and TNFD logic, adapted for small businesses and local projects. It helps organizations map where they are today and where they can go next."
    },
    {
        icon: <Wand2 className="h-8 w-8 text-primary" />,
        title: "Impact Wizard",
        description: "A structured, human-friendly flow to register regenerative actions — from agroforestry practices and soil care to educational projects, biodiversity monitoring and community clean-ups."
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "AI Pre-Validation",
        description: "An AI-assisted layer that checks clarity, consistency and completeness of submissions. It helps projects tell their story better, ensures minimum data quality and prepares actions for human and community validation."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Regenerative Identity Layer",
        description: "A regenerative identity layer that will evolve to use verifiable credentials, attestations and reputation signals — aggregating trust across multiple actions, diagnostics and collaborations."
    },
    {
        icon: <UserRound className="h-8 w-8 text-primary" />,
        title: "Public Impact Profiles",
        description: "A public-facing profile where organizations and people can share their regenerative journey: diagnostics, actions, evidence, recognitions and pathways for collaboration or funding."
    }
];

const howItWorksSteps = [
    { step: 1, title: "Create your profile", description: "Create a RegenHub profile for your SME, school, project or personal practice." },
    { step: 2, title: "Run a LEAP Diagnostic", description: "Answer a guided set of questions to understand your current ecological context, risks, dependencies and regenerative opportunities." },
    { step: 3, title: "Submit Regenerative Actions", description: "Use the Impact Wizard to register actions: what you did, where, with whom, how often and what changed in the landscape or community." },
    { step: 4, title: "AI-Assisted Pre-Validation", description: "Our AI layer checks consistency, flags missing information and suggests clearer language so that your action is easier to understand and validate." },
    { step: 5, title: "Build Reputation & Share", description: "Validated actions and diagnostics feed your public profile, strengthen your regenerative identity and prepare you for partnerships, grants and community-aligned finance." }
];

export default function HubPage() {
  return (
    <>
      <section className="border-b bg-card">
        <div className="container text-center py-20 lg:py-32">
          <FadeIn>
            <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary">MVP in development</Badge>
                <Badge variant="secondary">Early pilots LATAM</Badge>
                <Badge variant="secondary">Open infrastructure</Badge>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              RegenHub — Regenerative Impact & Identity Layer
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A modular hub for ecological diagnostics, impact tracking, regenerative identity and AI-assisted validation — built for small businesses, educators, local projects and regenerative citizens.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#">
                Join as Early Tester
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ecosystem">
                Explore the Ecosystem <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">What is RegenHub?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    RegenHub is the core infrastructure layer of the BeRegen ecosystem.
                </p>
                 <p className="mt-4 text-lg text-muted-foreground">
                    It is a space where SMEs, educators, local projects and citizens can run ecological diagnostics, register their regenerative actions, build a verified regenerative identity, receive AI-assisted validation, and share public impact profiles.
                </p>
                 <p className="mt-4 text-lg text-muted-foreground font-semibold">
                    RegenHub turns scattered efforts into visible, verifiable and fundable regenerative impact.
                </p>
            </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">Who is RegenHub for?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whoIsItFor.map((user) => (
                        <div key={user.title} className="flex flex-col text-center items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">{user.icon}</div>
                            <h3 className="font-headline text-lg font-semibold">{user.title}</h3>
                            <p className="mt-2 text-muted-foreground text-sm">{user.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>
      
      <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
                Core Modules
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreModules.map((item) => (
                <Card key={item.title} className="flex flex-col text-left">
                  <CardHeader>
                    {item.icon}
                    <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32 bg-primary/10">
            <div className="container max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">How RegenHub Works</h2>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-primary/20 hidden md:block"></div>
                    {howItWorksSteps.map((item, index) => (
                        <div key={item.step} className={`relative flex items-start gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:flex bg-background border-2 border-primary/20 text-primary w-16 h-16 rounded-full items-center justify-center shrink-0">
                                <span className="font-headline text-2xl font-bold">{item.step}</span>
                            </div>
                            <div className="pb-16 flex-1">
                                <div className="md:hidden bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 shrink-0">
                                    <span className="font-headline text-xl font-bold">{item.step}</span>
                                </div>
                                <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                                <p className="mt-2 text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Current Status & Pilot Roadmap</h2>
                    <p className="mt-4 text-muted-foreground">
                        RegenHub is currently in MVP development, with early pilots starting in Latin America.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        Our next milestones:
                    </p>
                     <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                        <li><strong>Q4 2025:</strong> MVP live with LEAP v1, Impact Wizard and AI pre-validation v0, 10–20 pilot users.</li>
                        <li><strong>Q1 2026:</strong> Identity & reputation layer (early verifiable credentials and attestations), public impact profiles and 50+ SMEs and projects onboarded.</li>
                        <li><strong>Q2 2026:</strong> Regional pilots with communities, educators and local networks across Brazil and LATAM.</li>
                    </ul>
                </div>
                 <div className="bg-card p-8 rounded-2xl border">
                    <h3 className="font-headline text-xl font-semibold mb-4">Built on Open Standards & Public Goods</h3>
                    <p className="text-muted-foreground">
                        RegenHub is being designed to integrate with open standards and public-good infrastructure in the Web3 and regenerative finance ecosystems.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        We are exploring: ecological diagnostic logic inspired by LEAP and TNFD, verifiable credentials and attestations for regenerative identity, interoperability with tools like Gitcoin Passport and similar reputation systems, and pathways to integrate with regenerative funds and public-good ecosystems.
                    </p>
                </div>
            </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
          <div className="container text-center max-w-3xl mx-auto">
             <h2 className="font-headline text-3xl font-bold tracking-tight">Join the First Wave of RegenHub Pilots</h2>
             <p className="mt-4 text-muted-foreground">
                We are inviting a first wave of SMEs, educators, local projects and regenerative communities to co-create RegenHub with us. If you run a small regenerative business, coordinate a school or learning community, steward a local project or agroecology initiative, or are building regenerative infrastructure yourself, we would love to explore a pilot with you.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild><Link href="#">Apply for a Pilot</Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="#">Talk to the Team</Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
