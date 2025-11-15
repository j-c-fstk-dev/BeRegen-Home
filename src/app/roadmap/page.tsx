import { Metadata } from "next";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, CheckCircle, Rocket, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "BeRegen Roadmap 2025–2027 — Grants, Milestones & Ecosystem Growth",
    description: "Explore BeRegen’s timeline, grant participation and development milestones across RegenHub, RegenFlix, RegenApp and RegenFund.",
};

const timeline = [
    {
        quarter: "Q4 2025",
        title: "RegenHub Foundation",
        points: [
            "RegenHub MVP launches",
            "LEAP Ecological Diagnostic v1",
            "Impact Wizard v1",
            "AI Pre-Validation v0",
            "10–20 early pilot projects onboarded",
            "First round of feedback and field testing",
        ]
    },
    {
        quarter: "Q1 2026",
        title: "Identity & Reputation Layer",
        points: [
            "Regenerative Identity Layer v1",
            "Verifiable Credentials (early version)",
            "Attestations & reputation signals",
            "Public Impact Profiles (open beta)",
            "Expansion to 50+ SMEs, schools and community projects",
        ]
    },
    {
        quarter: "Q2 2026",
        title: "RegenFlix (Early Release)",
        points: [
            "RegenFlix platform soft launch",
            "First learning pathways and regenerative courses",
            "Short documentaries & field-based stories",
            "Hub-to-Flix integration (stories from impact data)",
            "Regional pilots across Brazil & LATAM",
        ]
    },
    {
        quarter: "Q3 2026",
        title: "RegenApp Prototypes",
        points: [
            "Habits & micro-rituals app prototype",
            "Daily regenerative actions (micro-actions)",
            "RegenScore v1",
            "Community missions & local challenges",
            "Integration with RegenHub identity layer",
        ]
    },
    {
        quarter: "Q4 2026 → Q1 2027",
        title: "RegenFund Design",
        points: [
            "Early regenerative funding mechanisms",
            "Mini-grants and community-aligned finance",
            "Retroactive funding experiments",
            "Token design (research phase)",
            "Interoperability with public-good ecosystems",
        ]
    }
];

const activeGrants = [
    "TNFD – Nature Intelligence for Business Challenge (LEAP Module)",
    "Ethereum Foundation – Ecosystem Support Program (ESP)",
    "Localism LATAM – Peer Network & Stewardship Round",
    "Gitcoin GG24 – Developer Tooling & Interop Standards",
    "Arbitrum Grants – Public Goods & Infrastructure",
    "Celo Public Goods – Regenerative Local Economies",
];

const upcomingGrants = [
    "Aave Grants DAO",
    "Optimism Retro Funding (Q1 2026)",
    "Octant (when reopening)",
    "NEAR Sustainability Grants",
    "Polygon / ZK Identity Grants",
    "Solana Ecosystem Grants",
];

const whyReasons = [
    { 
        title: "Clear ecosystem vision", 
        description: "We are building a multi-layered ecosystem, not a single tool — combining ecological diagnostics, impact validation, identity, learning and community-aligned finance." 
    },
    { 
        title: "Grounded in real communities", 
        description: "Pilots are happening with real small businesses, educators and local projects across Brazil and LATAM." 
    },
    { 
        title: "Built on interoperability", 
        description: "Our infrastructure aligns with global public-good standards: VCs, attestations, open ecosystems, AI-assisted validation and impact legibility." 
    },
    { 
        title: "Long-term regenerative alignment", 
        description: "The project is fully grounded in regenerative logic, not extractive tech." 
    }
];

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        title="Roadmap & Grants"
        description="Our 2025–2027 roadmap, milestones, grant participation and the long-term vision for building regenerative infrastructure."
      />
      
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-medium">2025–2027 Roadmap</h2>
                <div className="mt-4 text-lg text-neutral-600 space-y-4">
                    <p>
                        BeRegen is unfolding in intentional phases, ensuring that each layer of the ecosystem is stable, meaningful and capable of supporting real regenerative communities.
                    </p>
                    <p>
                    Below is our high-level roadmap for the next three years, guiding the development of RegenHub, RegenFlix, RegenApp and RegenFund.
                    </p>
                </div>
            </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl font-medium text-center mb-12">Detailed Roadmap</h2>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
                    {timeline.map((item, index) => (
                        <div key={item.quarter} className={`relative flex items-start gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:flex bg-background border-2 border-primary/20 text-primary w-24 h-24 rounded-full items-center justify-center shrink-0 flex-col">
                                <Calendar className="h-6 w-6 mb-1"/>
                                <span className="font-headline text-lg font-semibold">{item.quarter}</span>
                            </div>
                            <div className="pb-16 flex-1">
                                <div className="md:hidden bg-primary/10 text-primary p-4 rounded-xl flex items-center gap-4 mb-4 shrink-0">
                                    <Calendar className="h-6 w-6"/>
                                    <span className="font-headline text-xl font-semibold">{item.quarter}</span>
                                </div>
                                <h3 className="font-headline text-xl font-medium">{item.title}</h3>
                                <ul className="mt-4 space-y-2">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-neutral-600">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
                    <h2 className="font-headline text-3xl font-medium">Grants, Programs & Collaborations</h2>
                    <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                        BeRegen is actively participating in regenerative finance, public goods and ecological innovation programs across multiple networks. Below is an updated list of programs, grants and challenges we have applied to or are currently engaged with:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Rocket className="text-primary"/>
                                Active / Recent Submissions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {activeGrants.map(grant => (
                                    <li key={grant} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary/80 mt-0.5 shrink-0"/>
                                        <span className="text-neutral-600">{grant}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="text-primary"/>
                                Upcoming Opportunities
                            </CardTitle>
                             <CardDescription>High Alignment</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {upcomingGrants.map(grant => (
                                     <li key={grant} className="flex items-start gap-3">
                                        <div className="h-5 w-5 flex justify-center items-center mt-0.5 shrink-0">
                                            <div className="h-2 w-2 rounded-full bg-border" />
                                        </div>
                                        <span className="text-neutral-600">{grant}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container">
                <h2 className="font-headline text-3xl font-medium text-center mb-12">Why BeRegen is a Strong Candidate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {whyReasons.map((reason) => (
                        <div key={reason.title} className="p-6 border rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                           <h3 className="font-headline text-xl font-medium mb-2">{reason.title}</h3>
                           <p className="text-neutral-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container text-center max-w-3xl mx-auto">
             <h2 className="font-headline text-3xl font-medium">Partner with BeRegen</h2>
             <p className="mt-4 text-neutral-600">
                We are building a long-term regenerative infrastructure and are looking for partners, funders and pilot communities aligned with this mission. If you are a grant operator, public-good ecosystem, regenerative investor or a community that wants to pilot the RegenHub, let’s talk.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild><Link href="/contact">Contact the Team</Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="/contact">Start a Pilot</Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
