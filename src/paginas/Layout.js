import { Outlet,link } from "react-router-dom";

function Layout(){
  return (
    <div>
      <nav>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>

          <li>
            <link to="/About">About</link>
          </li>

          <li>
            <link to="/Dashboard">Dashboard</link>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
