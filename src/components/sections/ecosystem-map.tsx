"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  LayoutGrid,
  Library,
  Scale,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { ecosystemLinks } from "@/lib/nav-links";
import { Button } from "../ui/button";

const icons: { [key: string]: React.ReactNode } = {
  "/app": <Sparkles className="h-8 w-8" />,
  "/hub": <LayoutGrid className="h-8 w-8" />,
  "/fund": <Scale className="h-8 w-8" />,
  "/flix": <Library className="h-8 w-8" />,
  "/store": <ShoppingBag className="h-8 w-8" />,
};

const Node = ({
  href,
  name,
  x,
  y,
  delay,
}: {
  href: string;
  name: string;
  x: number;
  y: number;
  delay: number;
}) => (
  <motion.g
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, delay }}
    whileHover={{ scale: 1.1 }}
    className="cursor-pointer"
  >
    <Link href={href}>
      <g>
        <circle cx={x} cy={y} r="50" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
        <foreignObject x={x - 25} y={y - 25} width="50" height="50">
          <div className="flex items-center justify-center w-full h-full text-primary">
            {icons[href]}
          </div>
        </foreignObject>
        <text
          x={x}
          y={y + 70}
          textAnchor="middle"
          className="font-headline font-semibold fill-foreground text-lg"
        >
          {name}
        </text>
      </g>
    </Link>
  </motion.g>
);

export default function EcosystemMap() {
  const center = { x: 300, y: 300 };
  const radius = 220;
  const numNodes = ecosystemLinks.length;

  const nodePositions = ecosystemLinks.map((_, i) => {
    const angle = (i / numNodes) * 2 * Math.PI - Math.PI / 2;
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    };
  });

  return (
    <section id="ecosystem-map" className="py-24 sm:py-32">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
          Explore the Ecosystem
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          A living ecosystem of tools, culture, and regenerative governance. Click on a node to learn more.
        </p>
        <div className="mt-12 flex justify-center">
          <svg viewBox="0 0 600 600" className="max-w-full h-auto">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Dashed orbit lines */}
            {nodePositions.map((pos, i) => (
              <motion.path
                key={i}
                d={`M ${center.x} ${center.y} L ${pos.x} ${pos.y}`}
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeInOut" }}
              />
            ))}

            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <circle
                cx={center.x}
                cy={center.y}
                r="70"
                fill="hsl(var(--primary))"
              />
              <foreignObject x={center.x - 30} y={center.y - 30} width="60" height="60">
                 <div className="flex items-center justify-center w-full h-full text-primary-foreground">
                    <HeartHandshake className="h-10 w-10"/>
                 </div>
              </foreignObject>
               <text
                x={center.x}
                y={center.y + 95}
                textAnchor="middle"
                className="font-headline font-bold fill-foreground text-xl"
              >
                BeRegen
              </text>
            </motion.g>

            {ecosystemLinks.map((link, i) => (
              <Node
                key={link.href}
                href={link.href}
                name={link.name.replace('BeRegen ', '').replace('Regen', '')}
                x={nodePositions[i].x}
                y={nodePositions[i].y}
                delay={0.5 + i * 0.15}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
