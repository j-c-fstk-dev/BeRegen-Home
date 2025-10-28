import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  return (
    <section className="py-24 sm:py-32 bg-card border-y">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            Join our Regenerative Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to our newsletter for updates, insights, and stories from the heart of the regenerative movement. No spam, only value.
          </p>
          <div className="mt-8">
            {/* Placeholder for Beehiiv embed */}
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow text-base"
                aria-label="Email for newsletter"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              Powered by Beehiiv. By subscribing, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
