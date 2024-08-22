import { Outlet, Link } from "react-router-dom";

const Layout = () => {
return (
<>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
</>
)

}

export default Layout;