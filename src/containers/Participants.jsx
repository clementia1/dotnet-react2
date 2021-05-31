import { useSelector } from 'react-redux';
import ParticipantCard from '../components/ParticipantCard';

function Participants() {
    const participants = useSelector(state => state.participants);

    return (
      <div className="participants-container">
        {participants.map(participant => {
            return <ParticipantCard participant={participant}/>
        })}
      </div>
    );
}

export default Participants;
