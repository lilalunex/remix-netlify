import { Outlet, Link } from "@remix-run/react";

export default function Ideas() {
  return (
    <section id="ideas" className="md:flex">
      <div className="sub-nav">
        <h2>Navigation:</h2>
        <ul>
          <li><Link to="mobile-wheel-menu">- One handed mobile menu</Link></li>
          <br></br>
          <li><Link to="first-vue-website">- First Vue website</Link></li>
          <br></br>
          <li><Link to="socialize-mmo">- Socialize MMO</Link></li>
          <br></br>
          <li><Link to="the-coworking-hub">- The coworking hub</Link></li>
        </ul>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </section>
  );
}
