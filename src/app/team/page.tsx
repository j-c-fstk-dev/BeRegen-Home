
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Handshake, HeartHandshake, Leaf, Users } from "lucide-react";
import Link from "next/link";

const coreTeam = [
    {
        name: "Nat Cembranelli",
        role: "Founder",
        shortBio: "Founder • Regenerative Educator • Community Ecosystems & Storytelling",
        fullBio: [
            "Nat is a regenerative educator, community ecosystem builder and storyteller with years of experience working with families, schools and nature-based projects across Brazil.",
            "Her work integrates ecological living, regenerative practices, Waldorf-inspired education, community stewardship and narrative building. She has created educational materials, seasonal guides, regenerative content and community initiatives that bridge nature, culture and learning.",
            "Nat leads the vision, fieldwork, community relationships, regenerative learning pathways and the human-centered design of BeRegen’s ecosystem. She ensures that every tool we build remains grounded, accessible and rooted in real ecological practice."
        ],
        imageId: "team-member-3"
    },
    {
        name: "Jorge Cristo",
        role: "Co-Founder & Tech Lead",
        shortBio: "Co-Founder • Full-Stack Developer • ReFi Ecosystem Builder",
        fullBio: [
            "Jorge is a full-stack developer and ReFi builder since 2017. He is co-founder of the Green Pill Brasil (GPBrasil) community, co-creator of multiple local ReFi projects, and an active contributor to public-good ecosystems.",
            "He has participated in Gitcoin Grants rounds since GG18 — both as a donor and as a project receiving community support — and has collaborated with several ecosystems including Ethereum-based DAOs, Giveth, Celo and Localism-aligned networks.",
            "Jorge leads the technical architecture of BeRegen: identity and reputation systems, verifiable credentials, modular backend design, onchain integrations and the overall interoperability strategy of the ecosystem. His work ensures BeRegen remains open, verifiable, composable and aligned with public-good standards."
        ],
        imageId: "team-member-2"
    }
];

const values = [
    {
        icon: <Leaf className="h-8 w-8 text-primary"/>,
        title: "Regeneration First",
        description: "Everything we build must restore the living world, not extract from it."
    },
    {
        icon: <Users className="h-8 w-8 text-primary"/>,
        title: "Human-Centered Technology",
        description: "Tech should amplify human presence, not replace it."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary"/>,
        title: "Radical Clarity & Transparency",
        description: "We build in the open, share our process and maintain community trust."
    },
    {
        icon: <HeartHandshake className="h-8 w-8 text-primary"/>,
        title: "Community-Rooted",
        description: "Our foundation exists to support small places, small projects and real people on the ground."
    }
]

export default function TeamPage() {
    return (
        <>
            <PageHeader
                title="Meet the Team Behind BeRegen"
                description="A multidisciplinary foundation rooted in regeneration, education, technology and community-driven innovation."
            />

            <FadeIn>
                <section className="py-24 sm:py-32">
                    <div className="container text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">The Story Behind BeRegen</h2>
                        <div className="mt-4 text-lg text-muted-foreground space-y-4">
                            <p>
                                BeRegen was born from the intersection of regenerative living, education, community stewardship and open technology.
                            </p>
                            <p>
                                After years living close to nature, documenting regenerative practices, working with families, educators and small communities, we realized that something was missing: 
                                the invisible infrastructure that could help people and projects make their impact visible, verifiable and fundable.
                            </p>
                            <p>
                                At the same time, our experience inside the Web3 and ReFi ecosystem showed us the power of open systems, public goods, verifiable credentials, community-led funding and decentralized reputation.
                            </p>
                             <p className="font-semibold">
                                BeRegen is the bridge between these two worlds — grounded regenerative practice and interoperable digital infrastructure — designed to support real people, small places and regenerative communities across Latin America and beyond.
                            </p>
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section id="core-team" className="py-24 sm:py-32 bg-card border-y">
                    <div className="container max-w-5xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">Core Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {coreTeam.map(member => {
                                const image = PlaceHolderImages.find(p => p.id === member.imageId);
                                return (
                                <div key={member.name}>
                                    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 mb-6">
                                        <Avatar className="w-24 h-24">
                                            <AvatarImage src={image?.imageUrl} alt={member.name} data-ai-hint={image?.imageHint} />
                                            <AvatarFallback>{member.name.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                                            <p className="text-primary font-medium">{member.shortBio}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-muted-foreground">
                                        {member.fullBio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section className="py-24 sm:py-32">
                    <div className="container text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Extended Network & Collaborators</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our foundation collaborates with educators, ecologists, regenerative farmers, independent engineers, storytellers, teachers and small community projects across Brazil and LATAM. Although the core team is small, BeRegen grows through partnerships, field relationships and the collective wisdom of regenerative practitioners.
                        </p>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section className="py-24 sm:py-32 bg-primary/10">
                    <div className="container">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">Our Values as a Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {values.map((value) => (
                                <Card key={value.title} className="text-center bg-transparent border-0 shadow-none">
                                    <CardHeader className="items-center">
                                        <div className="bg-card border p-4 rounded-full mb-2 text-primary">{value.icon}</div>
                                        <CardTitle>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section className="py-24 sm:py-32">
                <div className="container text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Partner With BeRegen</h2>
                    <p className="mt-4 text-muted-foreground">
                        We are always looking for aligned partners, advisors, developers and regenerative practitioners who want to co-create the next phases of the BeRegen Ecosystem.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" asChild><Link href="/contact">Contact the Team</Link></Button>
                        <Button size="lg" variant="outline" asChild><Link href="/hub">Start a Pilot <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                    </div>
                </div>
                </section>
            </FadeIn>
        </>
    )
}
