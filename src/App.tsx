import Header from "./components/Header";
import Follower from "./components/Follower";
import Overview from "./components/Overview";
import OverviewData from "./data/Overview.json";
import FollowersData from "./data/Followers.json";

const App = () => {
  return (
    <>
      <Header />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {FollowersData.map((item) => (
          <Follower {...item} />
        ))}
      </div>
      <h2 className="text-4xl font-bold mb-4 mt-8">Overview - Today</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {OverviewData.map((item) => (
          <Overview {...item} />
        ))}
      </div>
    </>
  );
};

export default App;
