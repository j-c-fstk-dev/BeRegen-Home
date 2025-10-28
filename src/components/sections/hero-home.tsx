import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FadeIn } from "../animated/fade-in";

export default function HeroHome() {
  const heroImage = PlaceHolderImages.find(p => p.id === "home-hero-3d");

  return (
    <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="container">
        <FadeIn>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl mx-auto">
            BeRegen Foundation — regenerate your life, regenerate the planet.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A living ecosystem of tools, culture, and regenerative governance.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#ecosystem-map">
              Explore the Ecosystem <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/community">
              Support <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-12 md:mt-16">
          {heroImage && (
            <div className="relative aspect-[4/3] max-w-3xl mx-auto">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-2xl"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
