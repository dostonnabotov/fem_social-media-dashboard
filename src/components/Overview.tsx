import UpIcon from "/icons/icon-up.svg";
import DownIcon from "/icons/icon-down.svg";

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
    <div className="grid-flow p-4 bg-slate-100 rounded font-bold">
      <div className="flex items-end justify-between">
        <p>{title}</p>
        <img src={icon} alt={name} />
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl">{amount}</p>
        <div className="flex-group">
          <img
            src={rating.trend === "positive" ? UpIcon : DownIcon}
            alt={rating.trend}
          />
          <span>{rating.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
