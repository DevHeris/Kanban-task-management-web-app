import { useState } from 'react';

import BoardNav from '../features/boards/BoardNav';
import ThemeSwitch from './ThemeSwitch';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleVisibilityToggle() {
    setShowSidebar((show) => !show);
  }

  return (
    <>
      {showSidebar && (
        <aside className="flex flex-col row-span-full h-[90dvh] pt-5 justify-between">
          <div>
            <BoardNav />
          </div>
          <div>
            <ThemeSwitch />
            <li
              className="mr-4 mt-2 transition-all delay-100 text-medium-grey-text pl-7 py-3 text-base cursor-pointer rounded-r-full flex gap-3 items-center hover:text-blue hover:bg-light-blue font-bold"
              onClick={handleVisibilityToggle}
            >
              <div className="flex items-center gap-4">
                <span>
                  <img src="/assets/icon-hide-sidebar.svg" alt="" />
                </span>
                <span>Hide Sidebar</span>
              </div>
            </li>
          </div>
        </aside>
      )}
    </>
  );
}

export default Sidebar;
