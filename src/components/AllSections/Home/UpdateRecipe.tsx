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

export const UpdateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const recipeData = {
      title: title,
      description: description,
      recipes: ingredients,
      image: image,
    };
    console.log(recipeData);
    toast.success("Recipe Added Successfully!");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-4xl">
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
                className="col-span-2"
                onBlur={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 ">
              <Label className="text-right mt-10">Recipe Ingredients</Label>
            </div>
            <div className="grid grid-cols-3 mx-auto items-center gap-x-20 gap-y-4 mt-4">
              {recipeData?.map((item) => (
                <div key={item?.id} className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="size-4"
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
