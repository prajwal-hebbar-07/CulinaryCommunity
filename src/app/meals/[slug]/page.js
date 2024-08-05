export default function IndividualMealPage({ params }) {
  const { slug } = params;

  return <h1 className="text-3xl font-bold">Individual Meal Page - {slug}</h1>;
}
