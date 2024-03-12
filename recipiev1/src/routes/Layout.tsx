import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/recipes">All Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/category">Find by category</NavLink>
          </li>
          <li>
            <NavLink to="/add-edit">Add/edit own recipes</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
