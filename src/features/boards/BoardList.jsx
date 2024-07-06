import BoardItem from './BoardItem';

function BoardList() {
  return (
    <ul className="flex flex-col gap-3">
      <BoardItem boardName="Platform Launch" />
      <BoardItem boardName="Marketing Plan" />
      <BoardItem boardName="Roadmap" />
    </ul>
  );
}

export default BoardList;
