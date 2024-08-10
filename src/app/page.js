import Link from "next/link";

export const metadata = {
  title: "CulinaryCommunity - Home",
  description:
    "This is a community of people who like to try different tastes from around the world.",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-row justify-around items-center">
        <div className="w-[48rem] h-[36rem]">Image</div>
        <div className="text-start ms-16">
          <h2 className="text-5xl text-amber-500 font-extrabold">
            Culinary Community
          </h2>
          <p className="text-2xl text-white/50 mt-8 leading-loose">
            Connecting passionate chefs and food lovers to share, discover, and
            celebrate culinary creativity.
          </p>
          <div className="mt-8">
            <Link
              href="/community"
              className="text-3xl me-4 underline decoration-1 decoration-orange-500/50 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-600 hover:text-4xl hover:transition-all"
            >
              Join Community
            </Link>
            <Link
              href="/meals"
              className="text-3xl ms-4 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-700 hover:px-6 hover:py-3 hover:transition-all"
            >
              Explore
            </Link>
          </div>
        </div>
      </main>
      <section className="mt-16 mx-auto">
        <h3 className="text-3xl text-center underline decoration-2 decoration-white/25">
          How it works
        </h3>
        <p className="text-xl px-96 mt-4 text-white/50 text-center">
          Culinary Community is a platform for foodies to share their favorite
          recipes with the world. It's a place to discover new dishes, and to
          connect with other food lovers. Culinary Community is a place to
          discover new dishes, and to connect with other food lovers.
        </p>
      </section>
      <section className="mt-16 mx-auto">
        <h3 className="text-3xl text-center underline decoration-2 decoration-white/25">
          Why Culinary Community?
        </h3>
        <p className="text-xl px-96 mt-4 text-white/50 text-center">
          Culinary Community is a platform for foodies to share their favorite
          recipes with the world. It's a place to discover new dishes, and to
          connect with other food lovers. Culinary Community is a place to
          discover new dishes, and to connect with other food lovers.
        </p>
      </section>
    </>
  );
}
