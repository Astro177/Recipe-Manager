import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { recipeData } from "@/data/recipeData";
import { TRecipe } from "@/utils/globalTypes";
import { useUpdateRecipeMutation } from "@/redux/api/api";

interface TUpdateRecipeProps {
  id: string;
  initialData: TRecipe;
}

export const UpdateRecipe: React.FC<TUpdateRecipeProps> = ({
  id,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title);
  const [ingredients, setIngredients] = useState<string[]>(
    initialData?.ingredients
  );
  const [description, setDescription] = useState(initialData?.description);
  const [image, setImage] = useState(initialData?.image);

  const [updateRecipe] = useUpdateRecipeMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const recipeData = {
      title: title,
      description: description,
      image: image,
      ingredients: ingredients,
    };
    try {
      const options = { id: id, data: recipeData };
      updateRecipe(options);
      toast.success("Recipe Updated Successfully!");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-4xl h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Update your recipe
          </DialogTitle>
          <DialogDescription>
            You can your recipe details here
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4 my-10">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Recipe Title</Label>
              <Input
                id="Recipe Title"
                type="text"
                placeholder="Your Recipe Title"
                defaultValue={initialData?.title}
                required
                className="col-span-2"
                onBlur={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Recipe Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Your Recipe Description"
                defaultValue={initialData?.description}
                required
                className="col-span-2"
                onBlur={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Recipe Image</Label>
              <Input
                id="Image"
                type="text"
                placeholder="Your Recipe Image"
                defaultValue={initialData?.image}
                className="col-span-2"
                onBlur={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4">
              <Label className="text-right mt-10">Recipe Ingredients:</Label>
            </div>
            <div className="grid grid-cols-3 mx-auto items-center gap-x-20 gap-y-4 mt-2 border p-6 rounded-md">
              {recipeData?.map((item) => (
                <div key={item?.id} className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="size-4"
                    defaultChecked={initialData?.ingredients?.includes(
                      item?.label
                    )}
                    onChange={() => {
                      setIngredients((prevIngredients) => {
                        const isItemInIngredients = prevIngredients.includes(
                          item?.label
                        );

                        return isItemInIngredients
                          ? prevIngredients.filter(
                              (recipe) => recipe !== item?.label
                            )
                          : [...prevIngredients, item?.label];
                      });
                    }}
                  />
                  <Label>{item?.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-6">
            <DialogClose asChild>
              <Button className="bg-red-gradient mb-2">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="bg-primary-gradient mb-2">
                Update Recipe
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
