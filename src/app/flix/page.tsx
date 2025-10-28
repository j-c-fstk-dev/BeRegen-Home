import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Clapperboard, Film, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formats = [
    { icon: <Film/>, title: "Micro-docs", description: "Short, impactful documentaries on regenerative topics."},
    { icon: <Clapperboard/>, title: "Series", description: "In-depth series exploring complex subjects like ReFi."},
    { icon: <Lightbulb/>, title: "Short Courses", description: "Practical courses to learn new regenerative skills."},
];

export default function FlixPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'flix-teaser');
  return (
    <>
      <PageHeader
        title="RegenFlix"
        description="Education for a regenerative life. Engaging micro-docs, series, and short courses curated for impact."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tight">Content Formats</h2>
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                     {formats.map(f => (
                         <Card key={f.title}>
                             <CardHeader className="items-center text-center">
                                 <div className="bg-primary/10 text-primary p-3 rounded-full">{f.icon}</div>
                                 <CardTitle>{f.title}</CardTitle>
                             </CardHeader>
                             <CardContent className="text-center">
                                 <p className="text-sm text-muted-foreground">{f.description}</p>
                             </CardContent>
                         </Card>
                     ))}
                 </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tight">Teaser</h2>
                 <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Get a glimpse of the stories we're telling.</p>
                 <div className="mt-12 aspect-video max-w-4xl mx-auto bg-muted rounded-2xl overflow-hidden relative">
                    {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} layout="fill" objectFit="cover" data-ai-hint={heroImage.imageHint}/>}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Button size="icon" className="w-20 h-20 rounded-full"><ArrowRight className="h-8 w-8" /></Button>
                    </div>
                 </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container text-center">
             <h2 className="font-headline text-3xl font-bold tracking-tight">Start Learning</h2>
             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Access our growing library of regenerative content.</p>
             <div className="mt-8">
                <Button size="lg" asChild><Link href="#">Go to RegenFlix <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
