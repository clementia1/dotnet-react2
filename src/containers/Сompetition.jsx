import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Participants from './Participants';

function Сompetition() {
    const params = useParams();
    const participants = useSelector(state => state.competitions.id == params.id).participants;

    return (<Participants participants={participants}/>);
}

export default Сompetition;