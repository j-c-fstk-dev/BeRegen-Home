import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary">
        <path d="M50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 C25.15,95 5,74.85 5,50 C5,25.15 25.15,5 50,5 Z M50,10 C27.91,10 10,27.91 10,50 C10,72.09 27.91,90 50,90 C72.09,90 90,72.09 90,50 C90,27.91 72.09,10 50,10 Z" opacity="0.2" />
        <path d="M50 25 C58.582 38.066 69.144 44.599 71.684 54.599 C74.224 64.599 68.744 71.266 50 75 C31.256 71.266 25.776 64.599 28.316 54.599 C30.856 44.599 41.418 38.066 50 25 Z" />
      </svg>
    </div>
  );
}
