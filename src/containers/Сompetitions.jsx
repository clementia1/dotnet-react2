import { useSelector } from 'react-redux';
import СompetitionCard from '../components/cards/СompetitionCard';

function Сompetitions() {
    const [selectedCompetitionId, setSelectedCompetitionId] = ("");
    const competitions = useSelector(state => state.competitions); 

    return (
      <div className="competitions-container">
        {competitions.map(competition => {
            return <СompetitionCard competition={competition}/>
        })}
      </div>
    );
}

export default Сompetitions;
