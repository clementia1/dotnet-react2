import {Link, useRouteMatch, useLocation} from 'react-router-dom';

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
      
    let match = useRouteMatch({
        path: "/:id",
        strict: true,
        sensitive: true
      });

    return (
        <aside className="sidebar">
            <Navigation links={match && pathname !== "/new" ? competitionNavigation(match?.params?.id) : rootNavigation}/>
        </aside>
    )
}

export default Sidebar;