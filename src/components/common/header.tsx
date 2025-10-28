import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { mainNavLinks, ecosystemLinks } from "@/lib/nav-links";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-primary" />
            <span className="font-headline text-xl font-bold">BeRegen</span>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <Logo className="w-8 h-8 text-primary" />
                  <span className="font-headline text-xl font-bold">BeRegen</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {[...mainNavLinks, ...ecosystemLinks].map((link) => (
                    <Button variant="link" asChild key={link.href}>
                      <Link href={link.href}>{link.name}</Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Ecosystem <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {ecosystemLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">{link.name}</span>
                      <span className="text-xs text-muted-foreground">{link.description}</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainNavLinks.map((link) => (
            <Button variant="ghost" asChild key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/community">
              Support <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
