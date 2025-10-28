import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, UserCheck, School, Building } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const users = [
    { icon: <UserCheck/>, title: "Individuals", description: "Get your regenerative actions validated and build your on-chain reputation."},
    { icon: <School/>, title: "Educators", description: "Verify student projects and issue credentials for real-world impact."},
    { icon: <Building/>, title: "Partners", description: "Certify supply chain actions and enhance corporate social responsibility."},
];

export default function HubPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hub-diagram');
  return (
    <>
      <PageHeader
        title="RegenHub"
        description="Verification and certification of real-world impact, powered by AI and community curation."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">The Verification Pipeline</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">From submission to on-chain attestation, a transparent and robust flow ensures the integrity of every verified action.</p>
                <div className="mt-12">
                     {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} width={1000} height={600} className="rounded-2xl object-cover mx-auto" data-ai-hint={heroImage.imageHint}/>}
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Who Uses RegenHub?</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A diverse ecosystem of users leveraging the Hub for impact verification.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {users.map((user) => (
                        <Card key={user.title}>
                            <CardHeader className="items-center text-center">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">{user.icon}</div>
                                <CardTitle>{user.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-muted-foreground">{user.description}</p>
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
             <h2 className="font-headline text-3xl font-bold tracking-tight">Become a Curator</h2>
             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Have expertise in a specific domain? Join our decentralized team of curators and help us verify impact.</p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild><Link href="#">Access Hub <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="/community#get-involved">Become a Curator</Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
