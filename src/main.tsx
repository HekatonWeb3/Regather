import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { canisterId, idlFactory } from './declarations/backend';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layouts from './components/layouts/Layouts';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/Homepage';
import AuthLogin from './pages/AuthLogin';

const router = createBrowserRouter([{
  element: <Layouts />,
  children: [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <AuthLogin />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <RouterProvider router={router} />
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);
