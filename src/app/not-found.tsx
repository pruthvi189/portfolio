import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:bg-orange/90 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
