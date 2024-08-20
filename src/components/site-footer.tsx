import { CurrentPath } from '@/components/current-path';
import { StatusIndicator } from '@/components/status-indicator';

export const SiteFooter = () => (
  <div className="w-full justify-between bg-background horizontal center-v">
    <div className="horizontal center-v">
      <StatusIndicator />
      &nbsp;
      <CurrentPath />
    </div>

    <span>
      <span className="font-bold text-[#be95ff]">0 </span>
      <span className="font-bold text-[#3ddbd9]">0 </span>
      tyler-georges 1:1 &nbsp;
    </span>
  </div>
);
