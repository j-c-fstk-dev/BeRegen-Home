
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BrainCircuit, Coins, Database, Fingerprint, Handshake, IdCard, ListChecks, Network, NotebookPen, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const stackLayers = [
    {
        icon: <IdCard />,
        title: "Identity & Reputation",
        description: "A regenerative identity layer that aggregates trust across actions, diagnostics and community validation.",
        components: [
            "Profile identity (people, SMEs, schools, projects)",
            "Regenerative reputation signals",
            "Verifiable Credentials (future)",
            "Onchain Attestations (future)",
            "RegenScore (reputation metric)",
        ]
    },
    {
        icon: <Bot />,
        title: "Validation & Ecological Intelligence",
        description: "An AI-assisted validation and ecological intelligence layer that analyzes impact submissions, checks consistency, enhances narrative clarity and supports regenerative decision-making.",
        components: [
            "Genkit (Google)",
            "Gemini models",
            "AI pre-validation workflows",
            "Context scoring",
            "Regenerative narrative refinement",
        ]
    },
    {
        icon: <ListChecks />,
        title: "Impact & Data Layer",
        description: "A structured data layer where ecological diagnostics, impact submissions and evidence are collected, organized and prepared for reputation, reporting and funding.",
        components: [
            "LEAP Ecological Diagnostic",
            "Impact Wizard (action submission)",
            "Evidence Library",
            "Impact Taxonomy (early version)",
            "Public impact profiles",
        ]
    },
    {
        icon: <Network />,
        title: "Interoperability & Future Finance",
        description: "A future-facing layer designed to integrate regenerative identity and verified impact into public-good ecosystems, community funding and regenerative finance tools.",
        components: [
            "Integration with VCs & Attestations",
            "Gitcoin Passport interoperability",
            "Public-good identity networks",
            "Mini-grants & retro funding",
            "Regenerative funding rails",
        ]
    }
];

const sections = [
    {
        title: "AI & Ecological Intelligence",
        text: "Our AI systems are not built for extraction — they are built for regeneration.",
        points: [
            "Improve clarity and consistency of submissions,",
            "Support ecological diagnostics,",
            "Detect missing information,",
            "Help small projects tell their story,",
            "Make regenerative data legible and fundable.",
        ],
        conclusion: "Our approach ensures that human knowledge and local ecological wisdom always remain at the center."
    },
    {
        title: "Regenerative Identity & Reputation",
        text: "The identity system is designed to grow from simple user profiles into a regenerative trust layer based on verifiable credentials, attestations and public impact.",
        points: [
            "Long-term regenerative identity,",
            "Multi-source reputation,",
            "Portable impact,",
            "Community validation,",
            "And future funding alignment.",
        ],
        conclusion: ""
    },
    {
        title: "Impact & Data Architecture",
        text: "RegenHub structures data into three main categories:",
        points: [
            "1. Ecological diagnostics (LEAP)",
            "2. Action submissions (Impact Wizard)",
            "3. Evidence and supporting material",
        ],
        conclusion: "This creates a clear, verifiable and interoperable impact dataset that can be used for funding, coordination, learning and community decision-making."
    },
    {
        title: "Interoperability & Future Finance",
        text: "BeRegen is designed to integrate with public-good infrastructure in the ReFi and Web3 ecosystems.",
        points: [
            "Verifiable Credentials & Attestations",
            "Gitcoin Passport alignment",
            "ReFi & public-good networks",
            "Decentralized identity ecosystems",
            "Regenerative funding rails",
            "Retroactive funding & micro-grants",
        ],
        conclusion: "The long-term vision is regenerative finance aligned with community-validated ecological impact."
    }
];

export default function TechPage() {
    return (
        <>
            <PageHeader
                title="BeRegen Technical Overview"
                description="A modular, interoperable infrastructure designed for ecological diagnostics, regenerative identity, AI-assisted verification and community-aligned finance."
            />

            <FadeIn>
                <section id="stack" className="py-24 sm:py-32">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">The BeRegen Stack</h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                                BeRegen is built as a modular stack composed of four interconnected layers. Each layer stands on its own, but the ecosystem becomes powerful when they interact.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {stackLayers.map((layer) => (
                                <Card key={layer.title} className="flex flex-col">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                                {layer.icon}
                                            </div>
                                            <CardTitle className="text-xl">{layer.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4">
                                        <p className="text-muted-foreground">{layer.description}</p>
                                        <div>
                                            <h4 className="font-semibold text-sm mb-2">Core components:</h4>
                                            <ul className="space-y-1.5">
                                                {layer.components.map((component, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <ArrowRight className="h-4 w-4 text-primary/50" />
                                                        <span>{component}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            {sections.map((section, index) => (
                <FadeIn key={section.title}>
                    <section className={`py-24 sm:py-32 ${index % 2 === 0 ? 'bg-card border-y' : ''}`}>
                        <div className="container grid md:grid-cols-2 gap-16 items-center">
                            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                <h2 className="font-headline text-3xl font-bold tracking-tight">{section.title}</h2>
                                <p className="mt-4 text-muted-foreground">{section.text}</p>
                                {section.conclusion && <p className="mt-4 text-muted-foreground">{section.conclusion}</p>}
                            </div>
                            <div className={`p-8 rounded-2xl ${index % 2 === 0 ? 'bg-background/50' : 'bg-card border'}`}>
                                <ul className="space-y-3">
                                    {section.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                            <span className="font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </FadeIn>
            ))}

            <FadeIn>
                <section className="py-24 sm:py-32">
                    <div className="container text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tight">Documentation & Repositories</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">BeRegen is being built in an open and transparent way. Documentation, diagrams, database schemas and technical updates will be published here as they evolve.</p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button size="lg" variant="secondary" disabled>View GitHub (Coming Soon)</Button>
                            <Button size="lg" variant="secondary" disabled>Read Documentation (Coming Soon)</Button>
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section className="py-24 sm:py-32 bg-primary/10">
                    <div className="container text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold tracking-tight">Want to collaborate on identity, VCs, AI, impact data or regenerative finance?</h2>
                        <p className="mt-4 text-muted-foreground">We would love to connect.</p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button size="lg" asChild><Link href="/contact">Contact the Team</Link></Button>
                            <Button size="lg" variant="outline" asChild><Link href="/hub">Explore RegenHub</Link></Button>
                        </div>
                    </div>
                </section>
            </FadeIn>
        </>
    );
}

    