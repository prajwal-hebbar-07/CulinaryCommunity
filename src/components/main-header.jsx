import Image from "next/image";
import Link from "next/link";

import logo from "@/app/icon.png";

export default function MainHeader() {
  return (
    <div className="md:container mx-auto mt-5">
      <header className="flex justify-between items-center">
        <div className="no-underline">
          <Link href="/">
            <div className="flex flex-row items-center">
              <Image
                src={logo}
                alt="Culinary Community Logo"
                width={100}
                height={100}
              />{" "}
              <h1 className="text-3xl font-bold ms-2">CulinaryCommunity</h1>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="no-underline flex flex-row">
            <li className="mx-8 text-2xl">
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li className="mx-8 text-2xl">
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
