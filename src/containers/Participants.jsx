import ParticipantCard from '../components/cards/ParticipantCard';
import {useDispatch} from 'react-redux';
import {deleteParticipant} from '../store/competitionsSlice';

function Participants({participants, competitionId, status, winner}) {
    const dispatch = useDispatch();    

    return (
        <div className="participants-container">
            {participants.map((participant, i) => {
                return (<ParticipantCard
                    key={i}
                    participant={participant}
                    status={status}
                    winner={winner}
                    onClick={() => dispatch(deleteParticipant({participantId: participant.id, competitionId}))}/>)
            })}
        </div>
    );
}

export default Participants;
