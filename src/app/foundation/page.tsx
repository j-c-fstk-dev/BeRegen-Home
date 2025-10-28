import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Download, Gavel, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const principles = [
    { icon: <ShieldCheck />, title: "Integrity", description: "Acting with honesty and transparency." },
    { icon: <Scale />, title: "Justice", description: "Ensuring fair and equitable processes." },
    { icon: <Gavel />, title: "Accountability", description: "Taking responsibility for our actions." },
];

const team = [
    { name: "J. Doe", role: "Founder", imageId: "team-member-1" },
    { name: "A. Smith", role: "Lead Developer", imageId: "team-member-2" },
    { name: "L. Chen", role: "Community Lead", imageId: "team-member-3" },
    { name: "M. Garcia", role: "Governance Advisor", imageId: "team-member-4" },
]

export default function FoundationPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'foundation-hero');
  return (
    <>
      <PageHeader
        title="BeRegen Foundation"
        description="Our mandate, principles, and the team building a regenerative future."
        image={heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} width={1200} height={400} className="rounded-2xl object-cover" data-ai-hint={heroImage.imageHint} />}
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight">Our Mandate</h2>
                    <p className="mt-4 text-muted-foreground">The BeRegen Foundation is a non-profit organization dedicated to building and stewarding open-source infrastructure for the regenerative economy. Our mandate is to research, develop, and maintain public goods that empower individuals and communities to create positive environmental and social impact.</p>
                </div>
                <div className="bg-primary/10 p-8 rounded-2xl">
                    <h3 className="font-headline text-xl font-semibold mb-4">Key Documents</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between"><span className="font-medium">Foundation Charter</span> <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/> PDF</Button></li>
                        <li className="flex items-center justify-between"><span className="font-medium">Code of Ethics</span> <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/> PDF</Button></li>
                        <li className="flex items-center justify-between"><span className="font-medium">Ecosystem Whitepaper</span> <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/> PDF</Button></li>
                    </ul>
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Principles & Ethics</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Our work is guided by a strong ethical compass, ensuring our actions align with our regenerative mission.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map(p => (
                        <div key={p.title} className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">{p.icon}</div>
                            <h3 className="font-headline text-xl font-semibold">{p.title}</h3>
                            <p className="mt-2 text-muted-foreground">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tight">Team & Advisors</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">The dedicated individuals bringing the BeRegen vision to life.</p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map(t => {
                        const image = PlaceHolderImages.find(p => p.id === t.imageId);
                        return (
                            <div key={t.name} className="flex flex-col items-center">
                                <Avatar className="w-24 h-24 mb-4">
                                    <AvatarImage src={image?.imageUrl} alt={t.name} data-ai-hint={image?.imageHint}/>
                                    <AvatarFallback>{t.name.substring(0,2)}</AvatarFallback>
                                </Avatar>
                                <h4 className="font-semibold">{t.name}</h4>
                                <p className="text-sm text-muted-foreground">{t.role}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-primary/10">
          <div className="container text-center">
             <h2 className="font-headline text-3xl font-bold tracking-tight">Ready to Dive Deeper?</h2>
             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Explore our technical documentation or join our community to get involved.</p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild><Link href="/docs">Read the Docs <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="/community">Join Community</Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
