function BoardItem({ boardName }) {
  return (
    <li className="flex gap-3 items-center">
      <span>
        <img src="/src/assets/icon-board.svg" alt="icon board" />
      </span>
      <span className="">{boardName}</span>
    </li>
  );
}

export default BoardItem;
