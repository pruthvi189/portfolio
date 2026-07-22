import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#F5F5F0] mb-4">404</h1>
        <p className="text-xl mb-8" style={{ color: "rgba(245,245,240,0.55)" }}>
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#D97706] text-[#0A0A0A] px-6 py-3 rounded-full font-medium text-sm hover:bg-[#D97706]/90 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
