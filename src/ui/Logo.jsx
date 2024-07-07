import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="home" className="text-center px-5">
      <img
        className="w-auto h-5"
        src="/src/assets/logo-dark.svg"
        alt="kanban logo"
      />
    </NavLink>
  );
}

export default Logo;
