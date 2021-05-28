import { useSelector } from 'react-redux';
import ParticipantCard from '../components/ParticipantCard';

function ParticipantsContainer() {
    const participants = useSelector(state => state.participants);

    return (
      <div>
        {participants.map(participant => {
            return <ParticipantCard participant={participant}/>
        })}
      </div>
    );
}

export default ParticipantsContainer;
