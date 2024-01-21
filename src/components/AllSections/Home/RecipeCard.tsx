/* eslint-disable @next/next/no-img-element */
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TRecipe } from "@/utils/globalTypes";
import { RecipeDetails } from "./RecipeDetails";
import { UpdateRecipe } from "./UpdateRecipe";
import { DeleteRecipe } from "./DeleteRecipe";

interface IRecipeCardProps {
  recipe: TRecipe;
  i: number;
}

export const RecipeCard: React.FC<IRecipeCardProps> = ({ recipe, i }) => {
  return (
    <Card className="w-auto p-2 rounded-xl">
      <div className="rounded-xl border-2 border-blue-600/60">
        <CardHeader>
          <img
            src={recipe?.image}
            alt=""
            className="h-[200px] w-auto mb-4 rounded-md"
          />
          <CardTitle className="text-center">{recipe?.title}</CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center gap-5">
          <RecipeDetails recipe={recipe} />
          <UpdateRecipe id={recipe?._id} initialData={recipe} />
          <DeleteRecipe id={recipe?._id} />
        </CardFooter>
      </div>
    </Card>
  );
};
