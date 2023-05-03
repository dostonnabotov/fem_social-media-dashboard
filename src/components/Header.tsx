import Toggle from "./Toggle";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Social Media Dashboard</h1>
        <p>
          Total Followers: <span>23,004</span>
        </p>
      </div>
      <div>
        <span>Dark Mode</span>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
