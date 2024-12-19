import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to ShopMate!</h1>
      <UserButton />
    </div>
  );
};

export default HomePage;
