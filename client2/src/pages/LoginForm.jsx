import { useState } from 'react';
import { API_URL } from '../config';


const LoginForm = ( {onLoginSuccess} ) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function handleSubmit(e) {
      e.preventDefault();
       try {
          const sendToken = await fetch(`${API_URL}/login`, {
              method: "POST",
              headers: {"Content-Type":"application/json"},
              credentials: "include",
              body: JSON.stringify({ email, password}),
            });
            if(!sendToken.ok) throw new Error ("HTTP Error: " + sendToken.status);
            else { onLoginSuccess(); };
        } catch (error) { alert("error: " + error); }
      }

    return (
      <div className='App'>
        <header className='App-header'>
          <form onSubmit={handleSubmit}>
            <p><b>Login</b></p>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
              <p><b>Hasło</b></p>
              <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
              <br></br>
              <button type='submit'>Zaloguj</button>
          </form> 
        </header>
      </div>
    );
};

export default LoginForm;