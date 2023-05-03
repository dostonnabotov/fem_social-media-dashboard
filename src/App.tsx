import Header from "./components/Header";
import Follower from "./components/Follower";
import Overview from "./components/Overview";

const App = () => {
  return (
    <>
      <Header />
      <Follower />
      <h2>Overview - Today</h2>
      <Overview />
    </>
  );
};

export default App;
