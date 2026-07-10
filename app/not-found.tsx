import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-foreground/80">
        Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </section>
  );
}
