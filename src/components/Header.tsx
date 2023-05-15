import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 md:text-4xl">
          Social Media Dashboard
        </h1>
        <p className="font-bold">
          Total Followers: <span>23,004</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold leading-none">Dark Mode</span>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
