import { FadeIn } from "@/components/animated/fade-in";
import { CuratorFormDialog } from "@/components/community/curator-form-dialog";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

const supportTiers = [
    { title: "Supporter", benefits: "Discord access, monthly updates", price: "$5/mo" },
    { title: "Builder", benefits: "Supporter benefits + early access to apps", price: "$15/mo" },
    { title: "Steward", benefits: "Builder benefits + direct line to team", price: "$50/mo" },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Join the BeRegen Community"
        description="Our community is the heart of the ecosystem. Your support, participation, and expertise are what bring our regenerative vision to life."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Support Pathways</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Choose how you want to contribute to the growth and sustainability of the BeRegen ecosystem.</p>
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <Card className="text-left">
                        <CardHeader>
                            <Heart className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>Support on Patreon</CardTitle>
                            <CardDescription>Become a sustaining member and get access to exclusive benefits and a closer connection to our work.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 mb-6">
                                {supportTiers.map(tier => (
                                    <li key={tier.title} className="flex justify-between items-center p-3 border rounded-lg">
                                        <div>
                                            <h4 className="font-semibold">{tier.title}</h4>
                                            <p className="text-sm text-muted-foreground">{tier.benefits}</p>
                                        </div>
                                        <div className="font-bold text-lg">{tier.price}</div>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" asChild>
                                <Link href="#" target="_blank">Support on Patreon <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="text-left">
                        <CardHeader>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-primary fill-current mb-2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0-3h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0-3h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5z"/></svg>
                            <CardTitle>Donate on Giveth</CardTitle>
                            <CardDescription>Make a one-time or recurring donation directly to our projects on-chain. All donations are transparent and may be eligible for GIVbacks.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col h-full">
                           <div className="flex-grow space-y-2 text-sm text-muted-foreground">
                             <p>Accepted tokens: ETH, DAI, GIV</p>
                             <p>All transactions are public on the blockchain.</p>
                           </div>
                           <Button className="w-full mt-6" asChild>
                                <Link href="#" target="_blank">Donate on Giveth <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section id="get-involved" className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Get Involved</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Your skills and expertise are valuable. Apply to become a curator or validator and play a direct role in our governance and verification processes.</p>
                <div className="mt-8">
                    <CuratorFormDialog />
                </div>
            </div>
        </section>
      </FadeIn>
    </>
  );
}
