import Image from "next/image";

import logo from "@/assets/logo.png";
import pizza from "@/assets/pizza.jpg";
import tomato from "@/assets/tomato-salad.jpg";

export default function MealCommunityPage() {
  return (
    <div className="text-center my-16">
      <div className="flex flex-row justify-center items-center">
        <h3 className="text-6xl text-slate-300/75 font-bold me-4">
          One Shared Passion:
        </h3>
        <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-600">
          Food
        </h2>
      </div>
      <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-600 my-10 font-light">
        Join our community to have a complete culinary experience!
      </p>
      <div className="flex flex-col items-center gap-16">
        <h3 className="text-4xl font-bold text-amber-200/75 mt-8">
          Community Perks
        </h3>
        <Image src={logo} width={150} height="auto"></Image>
      </div>
      <div className="flex flex-col items-center gap-16">
        <h3 className="text-2xl font-bold text-amber-200/75 mt-8">
          Share and discover recepies
        </h3>
        <Image
          src={pizza}
          width={150}
          height="auto"
          className="rounded-full"
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-16">
        <h3 className="text-2xl font-bold text-amber-200/75 mt-8">
          Find new friends and like minded people
        </h3>
        <Image
          src={tomato}
          width={150}
          height="auto"
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
}
