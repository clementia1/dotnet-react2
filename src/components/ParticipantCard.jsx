import {timeFromSeconds} from '../helpers';

export default function ParticipantCard(props) {

    return (
        <div className="card">
            <div className="card-content ">
                <div className="card-header">
                    <p className="card-title">{props.participant.firstname} {props.participant.lastname}</p>
                    <p className="card-subtitle">id: {props.participant.id}</p>
                </div>
                <div className="card-text">
                    <p>Time: {timeFromSeconds(props.participant.time)}</p> 
                </div>
            </div>
        </div>
    )
}