import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";

const links = [
  {
    text: "Home",
    to: "/home",
    classNames: []
  },
  {
    text: "Pokemon",
    to: "/pokemon",
    classNames: []
  },
  {
    text: "Sign In",
    to: "/signin",
    classNames: []
  },
  {
    text: "Sign Up",
    to: "/signup",
    classNames: []
  },
  {
    text: "Dashboard",
    to: "/dashboard",
    classNames: []
  }
];

const Layout = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-topbar">
          <h1 className="app-brand">GateGuard</h1>
          <Nav links={links} />
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">All rights reserved 2026</footer>
    </div>
  );
};

export default Layout;
