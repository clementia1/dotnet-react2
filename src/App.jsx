import { useSelector } from 'react-redux';
import ParticipantsContainer from './containers/ParticipantsContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import './App.css';


function App() {
  const participants = useSelector(state => state.participants);

  return (
    <div className="App">
      <ParticipantsContainer/>
      <RegistrationContainer/>
    </div>
  );
}

export default App;
