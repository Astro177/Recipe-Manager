import React from "react";
import { AddRecipe } from "./AddRecipe";
import { Input } from "@/components/ui/input";
import { RecipeList } from "./RecipeList";
import { useGetRecipesQuery } from "@/redux/api/api";
import { TRecipe } from "@/utils/globalTypes";

export const RecipeContainer = () => {
  const { data: recipes } = useGetRecipesQuery(null);

  return (
    <section className="">
      <div className="flex justify-between mt-10 px-5 lg:px-0">
        <AddRecipe />
        <Input
          type="text"
          placeholder="Search your recipes"
          className="w-1/3 border border-gray-400 focus:border-none"
        />
      </div>
      <div className="rounded-3xl p-5 bg-primary-gradient h-auto my-10 w-auto lg:w-[1200px]">
        <div className="h-auto rounded-xl space-y-3">
          {recipes?.map((recipe: TRecipe, i: number) => (
            <RecipeList key={recipe?._id} recipe={recipe} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
