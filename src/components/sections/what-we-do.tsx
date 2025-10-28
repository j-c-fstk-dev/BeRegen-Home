import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Landmark } from "lucide-react";

const pillars = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Products",
    description: "Building open-source tools like the BeRegen App, RegenHub, and RegenFlix to empower regenerative actions and education.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community",
    description: "Nurturing a global network of builders, thinkers, and doers dedicated to creating a regenerative culture.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Governance",
    description: "Developing decentralized and transparent governance models through the RegenFund to finance real-world impact.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            What We Do
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center p-4">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {pillar.icon}
                </div>
                <CardTitle>{pillar.title}</CardTitle>
              </CardHeader>
              <CardDescription>{pillar.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
