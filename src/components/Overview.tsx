import UpIcon from "/icons/icon-up.svg";
import DownIcon from "/icons/icon-down.svg";
import { formatNumber } from "../utils/formatter";

type OverviewProps = {
  name: string;
  title: string;
  icon: string;
  amount: number;
  rating: {
    trend: string;
    amount: number;
  };
};

const Overview = ({ name, title, icon, amount, rating }: OverviewProps) => {
  return (
    <div className="grid-flow rounded bg-neutral-300/70 p-5 font-bold dark:bg-neutral-600">
      <div className="flex items-end justify-between">
        <p>{title}</p>
        <img src={icon} alt={name} />
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl text-neutral-800 dark:text-neutral-100">
          {formatNumber(amount)}
        </p>
        <div className="flex-group">
          <img
            src={rating.trend === "positive" ? UpIcon : DownIcon}
            alt={rating.trend}
          />
          <span
            className={rating.trend === "positive" ? "text-green" : "text-red"}
          >
            {rating.amount}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
