import { NavLink } from 'react-router-dom';

function BoardItem({ boardName }) {
  // Decode and replace spaces with dashes
  const linkTo = `board/${decodeURIComponent(boardName).replace(/\s+/g, '-')}`;

  return (
    <li className="hover:bg-blue-hover pl-7 mr-4 py-3 text-sm transition-all delay-100 duration-300 hover:text-white cursor-pointer rounded-r-full">
      <NavLink className="flex gap-3 items-center" to={linkTo}>
        <span>
          <img src="/src/assets/icon-board.svg" alt="icon board" />
        </span>
        <span>{boardName}</span>
      </NavLink>
    </li>
  );
}

export default BoardItem;
