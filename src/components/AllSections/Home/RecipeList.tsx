import { Button } from "@/components/ui/button";
import { DeleteRecipe } from "./DeleteRecipe";
import { UpdateRecipe } from "./UpdateRecipe";
import { TRecipe } from "@/utils/globalTypes";

interface IRecipeListProps {
  recipe: TRecipe;
  i: number;
}

export const RecipeList: React.FC<IRecipeListProps> = ({ recipe, i }) => {
  return (
    <div className="bg-white rounded-2xl p-1">
      <div className="rounded-xl flex flex-col lg:flex-row gap-2 lg:gap-0 justify-center lg:justify-between items-center p-5 border-2 border-blue-600/60">
        <p className="font-bold mr-6">{i + 1}.</p>
        <h1 className="text-base font-bold flex-1">{recipe?.title}</h1>
        <p className="text-base flex-1">
          {recipe?.description?.slice(0, 20)}....
        </p>
        <div className="text-base flex flex-1 gap-2">
          {recipe?.ingredients?.length > 2
            ? recipe?.ingredients?.slice(0, 2)?.map((item, i) => (
                <div key={i}>
                  <p>{item},</p>
                </div>
              ))
            : recipe?.ingredients?.map((item, i) => (
                <div key={i}>
                  <p>{item},</p>
                </div>
              ))}
          ....
        </div>
        <div className="space-x-6 mt-6 lg:mt-0 flex">
          <Button className="bg-purple-gradient">See Details</Button>
          <UpdateRecipe id={recipe?._id} initialData={recipe} />
          <DeleteRecipe id={recipe?._id} />
        </div>
      </div>
    </div>
  );
};
