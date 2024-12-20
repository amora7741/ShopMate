import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = async () => {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center gap-8">
      <h1 className="text-7xl font-bold">ShopMate</h1>
      <p className="text-xl">
        A powerful and user-friendly online tool designed to help you keep track
        of all your items.
      </p>
      <div className="flex items-center gap-8">
        <Button asChild>
          <Link className="text-lg" href="/login">
            Get Started
          </Link>
        </Button>
        <Button variant="ghost" className="text-lg">
          Learn More
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
