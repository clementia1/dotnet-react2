import {timeFromSeconds} from '../../helpers';
import Button from '../Button';

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
                    <Button onClick={props.onClick} text="delete" style={{margin: 0, width: "100%"}}/>
                </div>
            </div>
        </div>
    )
}