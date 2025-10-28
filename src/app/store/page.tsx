import Image from "next/image";
import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Percent, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StorePage() {
  const products = PlaceHolderImages.filter(p => p.id.startsWith('store-product-'));

  return (
    <>
      <PageHeader
        title="RegenStore"
        description="Every purchase funds impact. Shop curated collections of physical and digital goods that support the ecosystem."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
            <div className="container grid md:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-center justify-center text-center bg-primary/10 p-12 rounded-2xl">
                    <Percent className="h-16 w-16 text-primary mb-4" />
                    <h2 className="font-headline text-2xl font-bold tracking-tight">Impact Contribution</h2>
                    <p className="mt-2 text-muted-foreground">A significant percentage of every sale is automatically directed to the RegenFund's ImpactPool, funding new regenerative projects.</p>
                </div>
                 <div className="flex flex-col items-center justify-center text-center bg-card p-12 rounded-2xl border">
                    <ShoppingBag className="h-16 w-16 text-primary mb-4" />
                    <h2 className="font-headline text-2xl font-bold tracking-tight">Our Collections</h2>
                    <p className="mt-2 text-muted-foreground">We partner with artisans and creators to offer unique, sustainable, and regenerative products, from physical goods to digital assets.</p>
                </div>
            </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-24 sm:py-32 bg-card border-y">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Featured Products</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Check out some of our best-sellers.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <Card key={product.id} className="overflow-hidden">
                            <div className="relative aspect-square">
                                <Image src={product.imageUrl} alt={product.description} fill className="object-cover" data-ai-hint={product.imageHint} />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">Product Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full" variant="secondary">View Product</Button>
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
             <h2 className="font-headline text-3xl font-bold tracking-tight">Start Shopping with Impact</h2>
             <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Our store is hosted on Etsy for a secure and familiar shopping experience.</p>
             <div className="mt-8">
                <Button size="lg" asChild><Link href="#" target="_blank">Shop on Etsy <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
             </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
