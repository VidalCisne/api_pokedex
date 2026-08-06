import NavLink from "./NavLinks";

const Nav = ({
    links
})=>{
    return (
        <nav className="nav-root">
          <ul className="nav-list">
            { (links ?? []).map((o)=> {
                return (<NavLink
                    key={o.text}
                    text={o.text}
                    to={o.to}
                    classNames={o.classNames ?? []} />);
            }) }
          </ul>
        </nav>
    );
}

export default Nav;