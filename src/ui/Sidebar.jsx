import Logo from './Logo';
import BoardNav from '../features/boards/BoardNav';
import ThemeSwitch from './ThemeSwitch';

function Sidebar() {
  return (
    <aside className="grid grid-col row-span-full gap-12 pt-5 border border-gray-100 grid-rows-[.5fr_5fr_.5fr] items-start">
      <Logo />
      <div>
        <BoardNav />
      </div>
      <div>
        <ThemeSwitch />
        <li className="mr-4 mt-2 transition-all delay-100 text-medium-grey-text pl-7 py-3 text-base cursor-pointer rounded-r-full flex gap-3 items-center hover:text-blue hover:bg-light-blue font-bold">
          <div className="flex items-center gap-4">
            <span>
              <img src="/assets/icon-hide-sidebar.svg" alt="" />
            </span>
            <span>Hide Sidebar</span>
          </div>
        </li>
      </div>
    </aside>
  );
}

export default Sidebar;
