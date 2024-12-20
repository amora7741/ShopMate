import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <div className="flex w-full items-center justify-between p-4">
      <Link href="/home" className="flex items-center gap-2">
        <FaShoppingCart className="size-8" />
        <span className="text-xl font-semibold">ShopMate</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {userId ? (
          <UserButton showName />
        ) : (
          <Button asChild>
            <Link href="login">Sign In</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
