/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TRecipe } from "@/utils/globalTypes";

type TRecipeDetailsProps = {
  recipe: TRecipe;
};

export const RecipeDetails: React.FC<TRecipeDetailsProps> = ({ recipe }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-gradient">See Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-4xl h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Recipe Details
          </DialogTitle>
          <DialogDescription>
            You can see your recipe details here
          </DialogDescription>
        </DialogHeader>
        <div>
          {recipe?.image && (
            <img
              src={recipe?.image}
              alt={recipe?.title}
              width={700}
              height={400}
              className="mx-auto rounded-lg w-auto m-10"
            />
          )}
          <div className="">
            <p className="text-center my-10 font-bold text-3xl">
              {recipe?.title}
            </p>
            <div className="flex justify-center">
              <ul className="my-5 list-disc list-inside flex flex-col gap-2 ">
                <span className="font-bold text-xl">Ingredients:</span>
                {recipe?.ingredients?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-center mt-10">
              <span className="text-bold">Instruction:</span>{" "}
              {recipe?.description}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <DialogClose asChild>
            <Button type="submit" className="bg-red-gradient mb-2">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
