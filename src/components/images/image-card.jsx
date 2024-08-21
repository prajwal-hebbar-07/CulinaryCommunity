import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ title, slug, image, summary, creator }) {
  return (
    <article className="relative w-full h-full bg-stone-700/50 rounded-lg">
      <div className="relative h-[60%] w-full">
        <Image
          src={image}
          alt={title}
          className="relative w-full h-full object-cover rounded-t-lg"
          fill
        />
      </div>
      <div className="mx-4">
        <h3 className="text-xl font-bold text-orange-400 my-4">{title}</h3>
        <p className="text-sm text-slate-300/50 my-4">{creator}</p>
        <p className="text-base text-orange-400/75 my-4">{summary}</p>
        <div className="flex justify-end mt-8">
          <Link
            href={`/meals/${slug}`}
            className="px-4 py-2 bg-gradient-to-r font-medium from-amber-500 to-orange-600 rounded-lg hover:bg-gradient-to-r hover:from-amber-500/75 hover:to-orange-600/75"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
