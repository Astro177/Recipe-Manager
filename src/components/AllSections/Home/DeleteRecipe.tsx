import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useDeleteRecipeMutation } from "@/redux/api/api";

interface DeleteTodoModalProps {
  id: string;
}

export const DeleteRecipe: React.FC<DeleteTodoModalProps> = ({ id }) => {
  const [deleteRecipe] = useDeleteRecipeMutation();
  const handleDelete = () => {
    try {
      deleteRecipe(id);
      toast.success("Recipe Delete Successfully!");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-gradient hover:bg-red-400">
          <FaTrashAlt />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl">
        <div>
          <p className="text-center p-10 font-bold text-2xl">
            Are You Sure You Want To Delete This Recipe?
          </p>
        </div>
        <div className="flex justify-center mb-5 gap-6 items-center">
          <DialogClose asChild>
            <Button className="bg-green-gradient mb-2">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              className="bg-red-gradient mb-2"
              onClick={handleDelete}
            >
              Delete Recipe
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
