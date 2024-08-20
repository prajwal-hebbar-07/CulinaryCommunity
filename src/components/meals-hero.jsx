import Link from "next/link";

export default function MealsHero() {
  return (
    <>
      <h2 className="text-5xl my-8">
        Discover Meals create{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-600">
          by Hebbar
        </span>
      </h2>
      <p className="mt-10 mb-6 text-orange-200/75 text-xl font-light tracking-wide">
        Choose your favorite recepie and cook it at home!
      </p>
      <Link
        href="/meals/share"
        className="px-4 py-2 font-bold text-xl rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-600 hover:text-2xl hover:transition-all"
      >
        Share Your Favourite Meal
      </Link>
    </>
  );
}
