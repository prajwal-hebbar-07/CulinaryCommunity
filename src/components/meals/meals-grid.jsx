import ImageCard from "../images/image-card";

export default function MealsGrid({ meals }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {meals.map((meal) => (
        <div key={meal.id} className=" w-auto h-[36rem]">
          <ImageCard {...meal} />
        </div>
      ))}
    </div>
  );
}
