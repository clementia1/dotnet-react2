import Button from '../Button';
import {Link} from 'react-router-dom';

export default function СompetitionCard(props) {

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-header">
                    <p className="card-title">{props.competition.name}</p>
                    <p className="card-subtitle">id: {props.competition.id}</p>
                    <p className="card-info">Status: {props.competition.status}</p>
                </div>
                <div className="card-text">
                    {props.competition.winner.name ? <p>Winner: {props.competition.winner.name}</p> : null}
                    <p>Participants: {props.competition.participants.length}</p>
                    <Link to={props.competition.id}><Button text="show" style={{margin: 0, width: "100%"}}/></Link>
                </div>
            </div>
        </div>
    )
}