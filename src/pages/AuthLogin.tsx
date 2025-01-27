import { useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as StoryManagerIdl } from '../declarations/backend';
import { AuthClient } from '@dfinity/auth-client'; // Import Internet Identity client

const agent = new HttpAgent({
  host: 'http://127.0.0.1:3000/'
});
await agent.fetchRootKey();

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");

    try {
      const authClient = await AuthClient.create(); // Create an AuthClient instance
      const identity = await authClient.login(); // Use Internet Identity to log in

      // Create an actor instance for StoryManager canister
      const storyManagerActor = Actor.createActor(
        StoryManagerIdl,
        {
          agent: agent,
          canisterId: 'be2us-64aaa-aaaaa-qaabq-cai',
        }
      );

      // Call the backend login function
      const result = await storyManagerActor.login() as any; // Call the login method without parameters
      setMessage(result);
    } catch (error: unknown) {
      console.error("Error in login:", error);
      if (error instanceof Error) {
        setMessage('Error logging in: ' + error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <h1>Login to Web Novel Platform</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
