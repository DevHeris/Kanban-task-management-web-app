import { useParams } from 'react-router';
import Logo from './Logo';

function Header() {
  const params = useParams();
  const boardName = params.boardId?.replace('-', ' ');

  return (
    <header className=" py-3 pr-10 grid h-auto grid-cols-[18em_auto_auto] items-center ">
      <Logo />
      <h3 className="font-bold text-xl tracking-wide">{boardName}</h3>
      <div className="flex justify-end">
        <div className="flex items-center gap-5">
          <button className="rounded-full bg-blue text-white font-bold py-3 px-5 hover:bg-blue-hover transition-all">
            + Add New Task
          </button>
          <div className="cursor-pointer">
            <img
              src="/assets/icon-vertical-ellipsis.svg"
              alt="vertical-ellipsis icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
