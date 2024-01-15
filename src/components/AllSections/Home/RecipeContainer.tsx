import React from "react";
import { AddRecipe } from "./AddRecipe";
import { Input } from "@/components/ui/input";
import { RecipeList } from "./RecipeList";

export const RecipeContainer = () => {
  return (
    <section className="">
      <div className="flex justify-between mt-10">
        <AddRecipe />
        <Input
          type="text"
          placeholder="Search your recipes"
          className="w-1/3 border border-gray-400 focus:border-none"
        />
      </div>
      <div className="rounded-3xl p-5 bg-primary-gradient h-auto my-10 w-auto lg:w-[1200px]">
        <div className="h-auto rounded-xl space-y-3">
          <RecipeList />
        </div>
      </div>
    </section>
  );
};
