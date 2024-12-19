import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">ShopMate</h1>
      <p>
        A powerful and user-friendly online tool designed to help you keep track
        of all your items.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/lists">Get Started</Link>
        </Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </main>
  );
};

export default HomePage;
