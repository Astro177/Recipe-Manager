"use client";
import { RecipeContainer } from "@/components/AllSections/Home/RecipeContainer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center container mx-auto">
      <Provider store={store}>
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold text-center px-5 lg:px-0 mt-20 lg:mt-0">
            Welcome to your recipes!
          </h1>
          <div className="mt-20">
            <RecipeContainer />
          </div>
        </div>
      </Provider>
    </section>
  );
};

export default page;
