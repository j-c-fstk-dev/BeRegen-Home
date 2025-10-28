import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, ShoppingBag } from "lucide-react";

const supportChannels = [
  {
    title: "Patreon",
    description: "Become a member for exclusive content, early access, and a role in our community.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    cta: "Support on Patreon",
    href: "#",
  },
  {
    title: "Giveth",
    description: "Make a direct, on-chain donation to our projects and get GIVbacks. Transparent and impactful.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-primary fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0-3h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0-3h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5z"/></svg>,
    cta: "Donate on Giveth",
    href: "#",
  },
  {
    title: "RegenStore",
    description: "Shop for sustainable products. A percentage of every sale directly funds our impact pool.",
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    cta: "Shop on Etsy",
    href: "#",
  },
];

export default function SupportChannels() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Support the Ecosystem
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Your support fuels our work. Choose the path that resonates most with you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportChannels.map((channel) => (
            <Card key={channel.title} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                {channel.icon}
                <CardTitle>{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{channel.description}</CardDescription>
              </CardContent>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href={channel.href} target="_blank">
                    {channel.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
