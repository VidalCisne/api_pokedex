import { NavLink as RouterNavLink } from "react-router";

const NavLink = (
    {
        text,
        to,
        classNames
    }
)=>{
    return (
        <li className="nav-item">
            <RouterNavLink
                to={to}
                className={({ isActive }) => [
                    "nav-link",
                    isActive ? "is-active" : "",
                    ...(classNames ?? [])
                ].join(" ").trim()}
            >
                {text}
            </RouterNavLink>
        </li>
    );
};

export default NavLink;