import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Participants from './Participants';

function Сompetition() {
    const params = useParams();
    const competiton = useSelector(state => state.competitions.find(item => item.id === params.id));

    return (
        <div className="competition">
            <h2>{competiton.name}</h2>
            <h3>Participants</h3>
            <Participants 
                participants={competiton.participants} 
                competitionId={params.id}/>
        </div>
    );
}

export default Сompetition;