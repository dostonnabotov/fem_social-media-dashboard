import UpIcon from "/icons/icon-up.svg";
import DownIcon from "/icons/icon-down.svg";

type FollowerProps = {
  name: string;
  type: string;
  icon: string;
  username: string;
  amount: number;
  rating: {
    trend: string;
    amount: number;
  };
};

const Follower = ({
  name,
  type,
  icon,
  username,
  amount,
  rating,
}: FollowerProps) => {
  return (
    <div className="grid-flow bg-slate-100 p-4 rounded text-center">
      <div className="flex-group mx-auto">
        <img src={icon} alt={name} />
        <p className="font-bold">{username}</p>
      </div>
      <p>
        <span className="text-5xl font-bold">{amount}</span>
        <span className="block uppercase tracking-widest">{type}</span>
      </p>
      <div className="flex-group mx-auto">
        <img
          src={rating.trend === "positive" ? UpIcon : DownIcon}
          alt={rating.trend}
        />
        <span>{rating.amount} Today</span>
      </div>
      <p></p>
    </div>
  );
};

export default Follower;
