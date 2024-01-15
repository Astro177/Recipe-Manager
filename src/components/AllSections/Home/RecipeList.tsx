import { Button } from "@/components/ui/button";
import { DeleteRecipe } from "./DeleteRecipe";
import { UpdateRecipe } from "./UpdateRecipe";

export const RecipeList = () => {
  return (
    <div className="bg-white rounded-2xl p-1">
      <div className="rounded-xl flex justify-between items-center p-5 border-2 border-blue-600/60">
        <p className="font-bold mr-6">1.</p>
        <h1 className="text-xl font-bold flex-1">Recipe Title</h1>
        <p className="text-base flex-[2]">Recipe Description</p>
        <p className="text-base flex-[2]">Recipe Ingredients</p>
        <div className="space-x-6">
          <Button className="bg-purple-gradient">See Details</Button>
          <UpdateRecipe />
          <DeleteRecipe />
        </div>
      </div>
    </div>
  );
};
