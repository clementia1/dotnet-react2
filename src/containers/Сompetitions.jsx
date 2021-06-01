import { useSelector } from 'react-redux';
import СompetitionCard from '../components/cards/СompetitionCard';

function Сompetitions() {
    const competitions = useSelector(state => state.competitions); 

    return (
      <div className="competitions-container">
        {competitions.map((competition, i) => {
            return <СompetitionCard key={i} competition={competition}/>
        })}
      </div>
    );
}

export default Сompetitions;
