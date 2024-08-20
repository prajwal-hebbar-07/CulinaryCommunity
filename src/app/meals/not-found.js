import Link from "next/link";

export default function MealsNotFound() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-center font-bold text-3xl">Meals Page Not Found!</h1>
      <p className="text-center">Try some other meal</p>
      <Link href="..">Go Back</Link>
    </div>
  );
}
