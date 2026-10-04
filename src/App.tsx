import { DateTime } from "luxon";

const START_DATE = DateTime.local(2026, 5, 20, 0, 0, 0, 0);
const SITES = ["Left Thigh", "Right Butt", "Left Butt", "Right Thigh"];

export const App: React.FC = () => {
  const diff = -Math.ceil(START_DATE.diffNow("day").days);

  const ndx = diff % 4;

  return (
    <div className="dark:bg-purple-950 w-full h-full display-flex flex flex-row items-center justify-center">
      <div className="flex display-flex items-center flex-col justify-center">
        <span className="text-purple-700 dark:text-purple-300 text-[57px] font-mono">Day #{diff}</span>
        <span className="text-purple-900 dark:text-purple-100 text-[57px] font-sans">{SITES[ndx]}</span>
      </div>
    </div>
  );
};
