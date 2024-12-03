import React from "react";

import { Link, Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div>
      <h1>Nav</h1>

      <nav>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            {" "}
            <Link to={"/Contact"}> Contact </Link>
          </li>
          <li>
            {" "}
            <Link to={"/About"}> About </Link>
          </li>
          <li>
            {" "}
            <Link to={"/Posts"}> Post </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>Main Content</h1>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Rootlayout;
