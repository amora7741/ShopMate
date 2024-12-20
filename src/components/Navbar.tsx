import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";

import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <Link href="/home" className="flex items-center gap-4">
        <FaShoppingCart className="size-8" />
        <span className="text-2xl font-semibold">ShopMate</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />

        <Button asChild>
          <Link href="login" className="text-lg">
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
