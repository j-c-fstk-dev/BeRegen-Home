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
  Instagram: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>,
  Patreon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15.36 10.22c-1.37-.2-2.73.55-3.35 1.78a3.78 3.78 0 0 0-1.12 2.76V20h-3.2V5.3h3.2v2.7c.36-.63 1.1-1.38 2.2-1.57 2.13-.37 4.1.92 4.1 3.5v1.89c0 1.9-.94 3.48-2.23 3.48Zm.14-5.02c-.52 0-1.17.2-1.63.56v-.56h-3.2v11.4h3.2V14.1c0-2.58 2.36-2.58 2.36 0v5.9h3.2v-6.3c0-3.48-2.06-5.1-4.93-5.1Z"/></svg>,
  Giveth: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M9.5 16.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0-3h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zm0-3h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5z"/></svg>,
  Etsy: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M11.23 19.34a2.22 2.22 0 0 1-3.66 1.43 2.1 2.1 0 0 1-1.28-1.43 2.16 2.16 0 0 1 .6-1.9 2.22 2.22 0 0 1 3.44-.22 2.1 2.1 0 0 1 .9 2.12Z"/><path d="M15.5 12.5a3.5 3.5 0 0 1-4.34 3.34 3.5 3.5 0 0 1-3.33-4.35 3.5 3.5 0 0 1 4.34-3.33 3.5 3.5 0 0 1 3.33 4.34Z"/><path d="M10.82 5.09A2.22 2.22 0 0 1 7.16 3.66a2.1 2.1 0 0 1-1.28 1.43 2.16 2.16 0 0 1 .6 1.9 2.22 2.22 0 0 1 3.44.22 2.1 2.1 0 0 1 .9-2.12Z"/><path d="M14 2c-1 0-1.5.5-1.5 1.5V3c0 .8.7 1.5 1.5 1.5H19a1 1 0 0 1 1 1v2.5c0 .8-.7 1.5-1.5 1.5h-2.5a1 1 0 0 0-1 1v2.5c0 .8.7 1.5 1.5 1.5H19a1 1 0 0 1 1 1V21c0 .8-.7 1.5-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-1a1 1 0 0 0-1-1h-2.5c-.8 0-1.5-.7-1.5-1.5v-2.5a1 1 0 0 1 1-1h2.5c.8 0 1.5-.7 1.5-1.5V11a1 1 0 0 0-1-1H9.5C8.7 10 8 9.3 8 8.5V6a1 1 0 0 1 1-1h2.5c.8 0 1.5-.7 1.5-1.5V2Z"/></svg>,
};


export default function Footer() {
  return (
    <footer className="bg-card border-t mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8 text-primary" />
              <span className="font-headline text-xl font-bold">BeRegen</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
             Regenerative Infrastructure for Communities.
            </p>
             <div className="mt-4 text-sm text-muted-foreground">
                <p>Email: <a href="mailto:beregenerative.life@gmail.com" className="hover:text-primary">beregenerative.life@gmail.com</a></p>
                <p>WhatsApp: <a href="tel:+5512982549745" className="hover:text-primary">+55 12 98254-9745</a></p>
             </div>
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
            © 2025 BeRegen Foundation. All rights reserved.
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
