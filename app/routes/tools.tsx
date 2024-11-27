import { Outlet, Link } from "@remix-run/react";

export default function Tools() {
  return (
    <div className="tools md:flex">
      <div className="sub-nav">
        <h2>Navigation:</h2>
        <ul>
          <li><Link to="change-log">- Change log</Link></li>
        </ul>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
