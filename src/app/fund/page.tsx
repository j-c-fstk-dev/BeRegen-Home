import { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "RegenFund",
    description: "The decentralized force financing real-world impact. Governed by the community, for the community."
};

const tokens = [
  { name: "$REGEN", description: "Governance token for voting on proposals.", type: "Governance" },
  { name: "$LIFE", description: "Soulbound token representing reputation and contributions.", type: "Reputation" },
  { name: "$SEED", description: "Passes granting access to specific features or events.", type: "Utility" },
];

export default function FundPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'fund-diagram');
  return (
    <>
      <PageHeader
        title="RegenFund DAO"
        description="The decentralized force financing real-world impact. Governed by the community, for the community."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-medium">Foundation vs. DAO</h2>
                    <p className="mt-4 text-neutral-600">The Foundation stewards the vision and provides legal grounding, while the DAO empowers the community to allocate resources and govern the ecosystem's treasury with full transparency.</p>
                </div>
                <div className="flex gap-4">
                    <Card className="flex-1">
                        <CardHeader><CardTitle>Foundation</CardTitle></CardHeader>
                        <CardContent><p className="text-sm text-neutral-600">Stewards vision, legal wrapper, initial development.</p></CardContent>
                    </Card>
                     <Card className="flex-1">
                        <CardHeader><CardTitle>DAO</CardTitle></CardHeader>
                        <CardContent><p className="text-sm text-neutral-600">Community-governed treasury, resource allocation.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-medium">Token Model</h2>
                <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">A multi-token system designed for robust governance, reputation, and utility.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tokens.map(token => (
                        <Card key={token.name} className="transition-transform duration-300 hover:scale-105">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">{token.name} <span className="text-sm font-normal bg-secondary text-secondary-foreground px-2 py-1 rounded-md">{token.type}</span></CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-600">{token.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-medium">Proposal Lifecycle</h2>
                <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">A clear and transparent process for community proposals.</p>
                <div className="mt-12">
                     {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} width={1000} height={600} className="rounded-2xl object-cover mx-auto" data-ai-hint={heroImage.imageHint}/>}
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-primary/10">
          <div className="container text-center">
             <h2 className="font-headline text-3xl font-medium">Participate in Governance</h2>
             <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">Have your say in the future of the ecosystem. Explore proposals and cast your vote.</p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild><Link href="#">Open Governance Portal</Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="/community#get-involved">Join as a Curator</Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
