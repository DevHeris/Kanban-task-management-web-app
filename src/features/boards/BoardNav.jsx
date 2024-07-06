import BoardList from './BoardList';

function BoardNav() {
  return (
    <>
      <p className="uppercase text-xs font-bold text-medium-grey-text tracking-wider">
        All Boards (3)
      </p>
      <nav>
        <BoardList />
      </nav>
    </>
  );
}

export default BoardNav;
