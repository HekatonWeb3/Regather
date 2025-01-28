import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import './App.css';
import { Button } from './components/elements/Button';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layouts from './components/layouts/Layouts';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/Homepage';
import AuthLogin from './pages/AuthLogin';
import { useAuth } from './hooks/useAuth';
import ProtectedRoutex from './pages/protected/ProtectedRoutex';
import CreateNovel from './pages/protected/CreateNovel';

function App() {
  const { isAuthenticated, loading } = useAuth();
  const router = createBrowserRouter([{
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: isAuthenticated ? <HomePage /> : <LandingPage />,
      },
      {
        path: "/login",
        element: <AuthLogin />
      },
      {
        path: "/create",
        element: (
          <ProtectedRoutex bypass={isAuthenticated}>
            <CreateNovel />
          </ProtectedRoutex>
        ),
        ErrorBoundary: () => {
          return <div>Something went wrong</div>
        }
      }
    ]
  }])
  if (loading) {
    return <div>Loading...</div>; // Menunggu pengecekan autentikasi selesai
  }
  return <RouterProvider router={router} />
}

export default App;
