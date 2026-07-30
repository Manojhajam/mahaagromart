import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-8xl sm:text-9xl font-bold text-primary-light mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-2">Page Not Found</h2>
      <p className="text-text-body text-center max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
