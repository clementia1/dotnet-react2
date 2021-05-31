import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Competitions from './containers/Сompetitions';
import Competition from './containers/Сompetition';
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
            <Competitions />
          </Route>
          <Route path="/:id">
            <Competition />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
