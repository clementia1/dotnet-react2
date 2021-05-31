import { useSelector } from 'react-redux';
import Participants from './containers/Participants';
import ParticipantRegistration from './containers/ParticipantRegistration';
import Sidebar from './containers/Sidebar';
import './App.css';


function App() {
  const participants = useSelector(state => state.participants);

  return (
    <>
      <Sidebar/>
      <div className="App">
        
        <Participants/>
        <ParticipantRegistration/>
      </div>
    </>
  );
}

export default App;
