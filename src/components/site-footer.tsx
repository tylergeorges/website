import { CurrentPath } from '@/components/current-path';
import { StatusIndicator } from '@/components/status-indicator';

export const SiteFooter = () => (
  <div className="sticky bottom-0 hidden w-full justify-between center-v md:horizontal">
    <span className="horizontal center-v">
      <StatusIndicator />
      &nbsp;
      <CurrentPath />
    </span>

    <span>
      <span className="font-bold text-[#be95ff]">0 </span>
      <span className="font-bold text-[#3ddbd9]">0 </span>
      tyler-georges 1:1
    </span>
  </div>
);
