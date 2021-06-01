import {Link, useRouteMatch} from 'react-router-dom';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setWinner, finishCompetition } from '../store/competitionsSlice';

function RootNavigation() {
    return (
        <>
            <li className="sidebar-li">
                <Link className="sidebar-link" to={`/`}>Competitions</Link>
            </li>
            <li className="sidebar-li">
                <Link className="sidebar-link" to={`/new`}>Add competiton</Link>
            </li>
        </>
    )
}

function CompetitionNavigation({id}) {
    const dispatch = useDispatch();
    const competiton = useSelector(state => state.competitions.find(item => item.id === id));
    
    const handleWinner = () => {
        let winner = [...competiton.participants].sort((a, b) => b.time - a.time)[0];
        dispatch(setWinner({competitionId: id, winner}));
        dispatch(finishCompetition({competitionId: id}));
    }

    return (
        <>
            <li className="sidebar-li">
                <Link className="sidebar-link" to={`/`}>&lt; Back</Link>
            </li>
            <li className="sidebar-li">
                <Link className="sidebar-link" to={`/competition/${id}`}>Participants</Link>
            </li>
            <li className="sidebar-li">
                <Link className="sidebar-link" to={`/competition/${id}/new`}>Add participant</Link>
            </li>
            <li className="sidebar-li">
                <Button className="sidebar-link" text="Show winner" onClick={handleWinner}/>
            </li>
        </>
    )
}

function Navigation() {
    let match = useRouteMatch({
        path: "/competition/:id",
        strict: true,
      });
    
    return (
        <ul className="sidebar-ul">
            {match ? <CompetitionNavigation id={match?.params?.id}/> : <RootNavigation/>}
        </ul>
    )
}

function Sidebar() {

    return (
        <aside className="sidebar">
            <Navigation/>
        </aside>
    )
}

export default Sidebar;