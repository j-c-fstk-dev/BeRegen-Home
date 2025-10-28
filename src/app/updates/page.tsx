import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const posts = [
  { id: 1, title: "Portal Launch: The BeRegen Ecosystem is Live!", date: "June 20, 2024", imageId: 'update-post-1', slug: '/updates/portal-launch' },
  { id: 2, title: "A Guide to our Community & How to Get Involved", date: "June 18, 2024", imageId: 'update-post-2', slug: '/updates/community-guide' },
  { id: 3, title: "Our Vision for a Decentralized Regenerative Fund", date: "June 15, 2024", imageId: 'update-post-3', slug: '/updates/dao-vision' },
  { id: 4, title: "Deep Dive: The Tech Behind RegenHub", date: "June 12, 2024", imageId: 'home-hero-3d', slug: '/updates/hub-tech' },
  { id: 5, title: "Introducing RegenFlix: Education for a New Paradigm", date: "June 10, 2024", imageId: 'flix-teaser', slug: '/updates/intro-flix' },
  { id: 6, title: "How RegenStore Purchases Fuel Impact", date: "June 8, 2024", imageId: 'store-product-1', slug: '/updates/store-impact' },
];

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        title="Updates"
        description="The latest news, articles, and developments from across the BeRegen ecosystem. Subscribe to our newsletter to stay in the loop."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const image = PlaceHolderImages.find(p => p.id === post.imageId);
                return (
                  <Card key={post.id} className="flex flex-col overflow-hidden">
                    {image && (
                      <div className="relative aspect-video">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-2">A brief summary of the post would go here, enticing the user to read more...</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" className="w-full" asChild>
                        <Link href={post.slug}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
