import { useParams } from 'react-router';

function Header() {
  const params = useParams();
  const boardName = params.boardId?.replace('-', ' ');

  return (
    <header className=" py-3 px-10 border-b flex justify-between items-center">
      <h3 className="font-bold text-xl tracking-wide">{boardName}</h3>
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
    </header>
  );
}

export default Header;
