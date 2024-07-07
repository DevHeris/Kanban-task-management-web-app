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
    </>
  );
}

export default BoardNav;
