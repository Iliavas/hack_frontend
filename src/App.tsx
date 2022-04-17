import react from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ActiveSessions, Login, PotentialSessions, Profile, SessionDetail } from './pages';
import { activeSessions, loginRoute, potentialSessions, profileRoute, sessionDetails } from './routes/routes';
//import "./serverMock";

function App() {

  return (
    <Router>
      <Routes>
        <Route path={profileRoute} element={<Profile />} />
        <Route path={activeSessions} element={<ActiveSessions />} />
        <Route path={loginRoute} element={<Login />} />
        <Route path={potentialSessions} element={<PotentialSessions />} />
        <Route path={sessionDetails} element={<SessionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
