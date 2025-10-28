import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1,200+", label: "Validated Actions" },
  { value: "500+", label: "Hours of Learning" },
  { value: "150+", label: "Supporters" },
];

export default function ImpactStats() {
  return (
    <section className="py-24 sm:py-32 bg-card border-y">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
          Impact & Transparency
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          We believe in radical transparency. Our progress and metrics are open for everyone to see.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <p className="font-headline text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button variant="outline" asChild>
            <Link href="/transparency">
              View Transparency Report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
