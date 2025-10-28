import Link from "next/link";
import { Logo } from "./logo";
import { footerLinks, socialLinks } from "@/lib/nav-links";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Send } from "lucide-react";

const socialIcons: { [key: string]: React.ReactNode } = {
  Github: <Github className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
  Discord: <Send className="h-5 w-5" />,
};

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8 text-primary" />
              <span className="font-headline text-xl font-bold">BeRegen</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              An open ecosystem of tools, culture, and governance for a regenerative future.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-headline font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Button
                      variant="link"
                      asChild
                      className="p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                    >
                      <Link href={link.href} target={link.external ? "_blank" : undefined}>
                        {link.name}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BeRegen Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" aria-label={link.name}>
                  {socialIcons[link.name] || <Send className="h-5 w-5" />}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
