import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-around items-center mx-auto my-16">
      <h2 className="text-3xl font-bold my-16">
        The page or the resource you are looking for is not available!
      </h2>
      <div>
        <Link
          href="/"
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-700 hover:px-6 hover:py-3 hover:transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
