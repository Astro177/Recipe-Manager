"use client";
import { RecipeContainer } from "@/components/AllSections/Home/RecipeContainer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center container mx-auto">
      <Provider store={store}>
        <div className="">
          <h1 className="text-5xl font-bold text-center">
            Welcome to your recipes!
          </h1>
          <div className="mt-20">
            <RecipeContainer />
          </div>
        </div>
      </Provider>
    </main>
  );
};

export default Home;
