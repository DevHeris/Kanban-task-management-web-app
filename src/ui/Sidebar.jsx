import Logo from './Logo';

function Sidebar() {
  return (
    <aside className="flex flex-col row-span-full gap-12 px-8 py-5 border border-grey-100">
      <Logo />
    </aside>
  );
}

export default Sidebar;
