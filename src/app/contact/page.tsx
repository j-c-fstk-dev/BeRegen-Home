import { Metadata } from "next";
import { FadeIn } from "@/components/animated/fade-in";
import { ContactForm } from "@/components/contact/contact-form";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Twitter, Handshake, Code, Pilcrow } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact BeRegen — Pilots, Partnerships & Regenerative Collaboration",
    description: "Reach the BeRegen team for pilots, partnerships, technical collaboration and ecosystem development opportunities.",
};

const collaborationReasons = [
    {
        icon: <Pilcrow className="h-8 w-8 text-primary" />,
        title: "Pilots & Testing",
        description: "If you run a small business, school or community project and want to join the first wave of RegenHub pilots — let’s talk."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Partnerships",
        description: "For grant collaborations, ecosystem partnerships, regenerative research and institutional alliances."
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Technical Collaboration",
        description: "Developers, researchers, public-good builders and AI/identity experts who want to co-create the BeRegen Stack."
    }
]

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Let's Connect"
                description="Whether you want to pilot RegenHub, partner with the ecosystem, collaborate on technology or support regenerative communities — we’re here."
            />

            <FadeIn>
                <section className="py-24 smpy-32">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <h2 className="font-headline text-3xl font-medium mb-8">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-primary" />
                                        <a href="mailto:hello@beregen.org" className="text-lg hover:underline">hello@beregen.org</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Twitter className="h-6 w-6 text-primary" />
                                        <a href="https://twitter.com/beregen" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">@beregen</a>
                                    </div>
                                </div>

                                <h2 className="font-headline text-3xl font-medium mt-16 mb-8">How We Can Collaborate</h2>
                                <div className="space-y-6">
                                    {collaborationReasons.map(reason => (
                                        <Card key={reason.title} className="bg-card transition-transform duration-300 hover:scale-105">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                {reason.icon}
                                                <CardTitle className="text-xl">{reason.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-neutral-600">{reason.description}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="font-headline text-3xl font-medium mb-8">Send Us a Message</h2>
                                <Card>
                                    <CardContent className="p-6">
                                        <ContactForm />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section className="py-24 sm:py-32 bg-primary/10">
                    <div className="container text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl font-medium">Let’s Regenerate the Future Together</h2>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button size="lg" asChild><Link href="/contact">Start a Pilot</Link></Button>
                            <Button size="lg" variant="outline" asChild><Link href="/team">Talk to the Team</Link></Button>
                            <Button size="lg" variant="outline" asChild><Link href="/hub">Explore RegenHub</Link></Button>
                        </div>
                    </div>
                </section>
            </FadeIn>
        </>
    )
}
