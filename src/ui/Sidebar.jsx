import Logo from './Logo';
import MainNav from '../features/boards/BoardNav';

function Sidebar() {
  return (
    <aside className="flex flex-col row-span-full gap-12  py-5 border border-grey-100">
      <Logo />
      <div>
        <MainNav />
      </div>
    </aside>
  );
}

export default Sidebar;
