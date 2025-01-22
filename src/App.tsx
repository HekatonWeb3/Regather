import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import './App.css';
import {Button} from './components/elements/Button';

function App() {
  const { data: count, refetch } = useQueryCall({
    functionName: 'get',
  });

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: refetch,
  });

  return (
    <div className="App bg-slate-300">
     Create Home
     <Button>Button Test</Button>
    </div>
  );
}

export default App;
