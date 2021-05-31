import {Link} from 'react-router-dom';

const links = [{
        pathname: "/",
        title: "Competitions"
    },
    {
        pathname: "/new",
        title: "Add competiton"
    }
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul className="sidebar-ul">
            {links.map(item => {
                return (
                    <li className="sidebar-li">
                        <Link className="sidebar-link" to={item.pathname}>{item.title}</Link>
                    </li>
                )
            })}
            </ul>
        </aside>
    )
}

export default Sidebar;