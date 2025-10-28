import { FadeIn } from "./animated/fade-in";

interface PageHeaderProps {
  title: string;
  description: string;
  image?: React.ReactNode;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <section className="border-b bg-card">
      <div className="container text-center py-20 lg:py-32">
        <FadeIn>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </FadeIn>
        {image && <FadeIn delay={0.2}><div className="mt-8 max-w-4xl mx-auto">{image}</div></FadeIn>}
      </div>
    </section>
  );
}
