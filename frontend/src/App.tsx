import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';

import { Dashboard } from './pages/Dashboard';

import { Resources } from './pages/Resources';

import { InviteGate } from './pages/InviteGate';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />
        <Route
          path="/login"
          element={<InviteGate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;