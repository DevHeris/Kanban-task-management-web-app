import BoardItem from './BoardItem';

function BoardList() {
  return (
    <ul className="flex flex-col  font-bold text-medium-grey-text pt-4">
      <BoardItem boardName="Platform Launch" />
      <BoardItem boardName="Marketing Plan" />
      <BoardItem boardName="Roadmap" />
    </ul>
  );
}

export default BoardList;
