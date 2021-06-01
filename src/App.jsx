import { Switch, Route } from 'react-router-dom';
import Competitions from './containers/Сompetitions';
import Competition from './containers/Сompetition';
import CompetitionForm from './containers/forms/CompetitionForm';
import ParticipantRegistration from './containers/ParticipantRegistration';
import Sidebar from './containers/Sidebar';
import './App.css';

function App() {

  return (
    <>
      <Sidebar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Competitions />
          </Route>
          <Route path="/new">
            <CompetitionForm />
          </Route>
          <Route exact path="/competition/:id">
            <Competition />
          </Route>
          <Route path="/competition/:id/new">
            <ParticipantRegistration />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
