import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="grid grid-rows-[1fr_auto]">
      <Header />
      <section className="grid grid-cols-[16rem_auto]  bg-light">
        <Sidebar />
        <main className="overflow-y-scroll pt-16 px-20 pb-24 bg-light-blue">
          <div className="flex flex-col my-0 mx-auto gap-12 max-w-[120rem] ">
            <Outlet />
          </div>
        </main>
      </section>
    </div>
  );
}

export default AppLayout;
