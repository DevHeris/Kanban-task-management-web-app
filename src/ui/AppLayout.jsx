import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <section className="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <div className="overflow-y-scroll pt-16 px-20 pb-24 bg-light">
        <div className="flex flex-col mx-auto gap-12 max-w-[120rem]">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AppLayout;
