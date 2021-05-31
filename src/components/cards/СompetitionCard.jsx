import {timeFromSeconds} from '../helpers';

export default function СompetitionCard(props) {

    return (
        <div className="card">
            <div className="user-info-container">
                <div className="user-info-bio">
                    <p className="user-name">{props.participant.firstname} {props.participant.lastname}</p>
                    <p className="user-info">id: {props.participant.id}</p>
                </div>
                <div className="user-info-time">
                    <p>Time: {timeFromSeconds(props.participant.time)}</p> 
                </div>
            </div>
        </div>
    )
}