import { testimonials } from "@/lib/site-config";

// Renders nothing until genuine, consented testimonials exist in site-config.ts — see the
// comment there. Intentionally not a "coming soon" placeholder (handoff §6.H / §20: don't leave
// a visible thin/empty section).
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
          What Families Say
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm">
              <p className="text-foreground/80">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-primary">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
