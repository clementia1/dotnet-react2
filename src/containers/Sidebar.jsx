import {Link, useRouteMatch, useLocation, useParams} from 'react-router-dom';
import { matchPath } from 'react-router';

const rootNavigation = [{
    pathname: "",
    title: "Competitions"
}, {
    pathname: "new",
    title: "Add competiton"
}];

const competitionNavigation = (id) => {
    return [{
        pathname: "",
        title: "< Back"
    },{
        pathname: `${id}`,
        title: "Participants"
    }, {
        pathname: `${id}/new`,
        title: "Add participant"
    }];
}

function Navigation({links}) {
    let {url} = useRouteMatch();
    
    return (
        <ul className="sidebar-ul">
            {links.map((item, i) => {
                return (
                    <li key={i} className="sidebar-li">
                        <Link className="sidebar-link" to={`${url}${item.pathname}`}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

function Sidebar() {
    let { pathname } = useLocation();
    let pathWithoutSlash = pathname.replace(/^\//, "");
      
    let match = useRouteMatch({
        path: "/:id",
        strict: true,
        sensitive: true
      });

    console.log(match)
    return (
        <aside className="sidebar">
            <Navigation links={pathname === "/" || pathname === "/new" ? rootNavigation : competitionNavigation(match?.params?.id)}/>
        </aside>
    )
}

export default Sidebar;