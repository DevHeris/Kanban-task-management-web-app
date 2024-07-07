import BoardList from './BoardList';

function BoardNav() {
  return (
    <>
      <p className="uppercase text-sm font-bold text-medium-grey-text tracking-wider px-5">
        All Boards (3)
      </p>
      <nav>
        <BoardList />
      </nav>
      <li className="mr-4 transition-all delay-100 text-blue pl-7 py-3 text-base cursor-pointer rounded-r-full flex gap-3 items-center hover:bg-light-blue font-bold">
        <span>
          <img src="/assets/icon-board.svg" alt="icon board" />
        </span>
        <span>+ Create New Board</span>
      </li>
    </>
  );
}

export default BoardNav;
