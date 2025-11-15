import { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Bot, CheckCircle, Gift, StepForward } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "BeRegen App",
    description: "RegenTaskFlow: Weaving productivity with regenerative habits to transform your daily life."
};

const steps = [
    { icon: <StepForward/>, title: "Add Tasks", description: "Input your daily to-dos and goals."},
    { icon: <CheckCircle/>, title: "Form Habits", description: "Connect tasks to regenerative habits."},
    { icon: <Gift/>, title: "Visualize Garden", description: "Watch your digital garden flourish with each completed action."},
    { icon: <Bot/>, title: "Get AI Insights", description: "Receive empathetic feedback and suggestions."},
];

const features = [
    { title: "Empathetic AI", description: "AI that understands and supports your journey."},
    { title: "Holistic Categories", description: "Organize tasks for mind, body, and planet."},
    { title: "Gamification", description: "Turn your habits into an engaging game."},
];

const faqItems = [
    { q: "How do I log in?", a: "You can sign up using your email or a social provider. Access is currently invite-only."},
    { q: "How is my data used?", a: "Your data is private and is used only to provide you with personalized insights. We adhere to strict privacy standards."},
    { q: "Is there a cost?", a: "The app is free to use during our beta phase. Future pricing models will be announced later."},
]

export default function AppPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'app-mockup-mobile');
  const screens = PlaceHolderImages.filter(p => p.id.startsWith('app-screen'));

  return (
    <>
      <PageHeader
        title="BeRegen App"
        description="RegenTaskFlow: Weaving productivity with regenerative habits to transform your daily life."
        image={heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} width={300} height={600} className="rounded-2xl object-contain" data-ai-hint={heroImage.imageHint}/>}
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-medium">How It Works</h2>
                <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">A simple yet powerful flow to integrate regenerative habits into your daily routine.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">{step.icon}</div>
                            <h3 className="font-semibold">{step.title}</h3>
                            <p className="text-sm text-neutral-600 mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-medium">Key Features</h2>
                    <p className="mt-4 text-neutral-600">Tools designed to make regeneration a natural part of your life.</p>
                     <div className="mt-8 space-y-4">
                        {features.map(f => (
                           <div key={f.title} className="p-4 rounded-lg border">
                                <h4 className="font-semibold">{f.title}</h4>
                                <p className="text-sm text-neutral-600">{f.description}</p>
                           </div>
                        ))}
                     </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {screens.slice(0,2).map(s => (
                        s && <Image key={s.id} src={s.imageUrl} alt={s.description} width={600} height={400} className="rounded-lg object-cover" data-ai-hint={s.imageHint} />
                    ))}
                </div>
            </div>
        </section>
      </FadeIn>
       <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl font-medium text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, i) => (
                        <AccordionItem value={`item-${i}`} key={i}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-primary/10">
          <div className="container text-center">
             <h2 className="font-headline text-3xl font-medium">Start Your Regenerative Journey</h2>
             <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">Access the platform or download the app to begin.</p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild><Link href="#">Access Platform</Link></Button>
                <Button size="lg" variant="outline" asChild><Link href="#">Learn More</Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
