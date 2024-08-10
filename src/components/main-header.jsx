import Image from "next/image";
import Link from "next/link";

import logo from "@/app/icon.png";
import NavLink from "./nav-link";

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
              <h1 className="text-3xl font-bold ms-2 text-amber-500">
                CulinaryCommunity
              </h1>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="no-underline flex flex-row">
            <li className="mx-8">
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li className="mx-8">
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
