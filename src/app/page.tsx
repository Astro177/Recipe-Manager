import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center container mx-auto">
      <h1 className="text-3xl lg:text-5xl font-bold text-center px-5 lg:px-0 my-20 lg:mt-0">
        Click on the button to view your recipes!
      </h1>
      <Link href={"/recipe-details"}>
        <Button className="bg-primary-gradient px-20">View your recipes</Button>
      </Link>
    </main>
  );
};

export default Home;
