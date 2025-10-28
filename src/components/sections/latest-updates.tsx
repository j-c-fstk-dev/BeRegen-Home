import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Portal Launch: The BeRegen Ecosystem is Live!",
    date: "June 20, 2024",
    image: PlaceHolderImages.find(p => p.id === 'update-post-1'),
    slug: '/updates/portal-launch'
  },
  {
    id: 2,
    title: "A Guide to our Community & How to Get Involved",
    date: "June 18, 2024",
    image: PlaceHolderImages.find(p => p.id === 'update-post-2'),
    slug: '/updates/community-guide'
  },
  {
    id: 3,
    title: "Our Vision for a Decentralized Regenerative Fund",
    date: "June 15, 2024",
    image: PlaceHolderImages.find(p => p.id === 'update-post-3'),
    slug: '/updates/dao-vision'
  },
];

export default function LatestUpdates() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Latest Updates
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Stay in the loop with the latest news, articles, and developments from the BeRegen ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              {post.image && (
                <div className="relative aspect-video">
                  <Image
                    src={post.image.imageUrl}
                    alt={post.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.imageHint}
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
          ))}
        </div>
      </div>
    </section>
  );
}
