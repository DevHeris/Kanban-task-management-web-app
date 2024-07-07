import Logo from './Logo';
import BoardNav from '../features/boards/BoardNav';

function Sidebar() {
  return (
    <aside className="grid grid-col row-span-full gap-12 py-5 border border-grey-100 grid-rows-[.5fr_5fr_.5fr] items-start">
      <Logo />
      <div>
        <BoardNav />
      </div>
      <div>
        <div className="bg-light-blue flex items-center flex-row py-1 gap-7 justify-center mx-2 rounded-lg">
          <div>
            <img src="/src/assets/icon-light-theme.svg" alt="sun icon" />
          </div>
          <div className="mt-2">
            <div className="switch-toggle">
              <input type="checkbox" id="toggle-switch" className="hidden" />
              <label htmlFor="toggle-switch" className="slider"></label>
            </div>
          </div>
          <div>
            <img src="/src/assets/icon-dark-theme.svg" alt="moon icon" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
