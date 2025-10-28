import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <>
      <PageHeader
        title="Documentation"
        description="Our documentation is the central source of truth for our ecosystem's technical specifications, governance handbooks, and more."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container text-center max-w-2xl">
             <h2 className="font-headline text-3xl font-bold tracking-tight">Access our Docs</h2>
             <p className="mt-4 text-muted-foreground">All of our technical documentation is hosted on a dedicated site powered by Docusaurus for a better reading and contribution experience.</p>
             <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="https://docs.beregen.life" target="_blank">
                        Go to docs.beregen.life <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
             </div>
             <p className="text-sm mt-4 text-muted-foreground">You are now leaving the main portal.</p>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
