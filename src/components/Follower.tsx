import UpIcon from "/icons/icon-up.svg";
import DownIcon from "/icons/icon-down.svg";
import { formatNumber } from "../utils/formatter";

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
    <div className="grid-flow gap-6 rounded border-t-4 border-twitter bg-neutral-300/70 p-5 text-center font-bold dark:bg-neutral-600">
      <div className="flex-group mx-auto">
        <img src={icon} alt={name} />
        <p>{username}</p>
      </div>
      <p>
        <span className="text-5xl text-neutral-800 dark:text-neutral-100">
          {formatNumber(amount)}
        </span>
        <span className="block font-normal uppercase tracking-[0.2em]">
          {type}
        </span>
      </p>
      <div className="flex-group mx-auto">
        <img
          src={rating.trend === "positive" ? UpIcon : DownIcon}
          alt={rating.trend}
        />
        <span
          className={rating.trend === "positive" ? "text-green" : "text-red"}
        >
          {rating.amount} Today
        </span>
      </div>
      <p></p>
    </div>
  );
};

export default Follower;
