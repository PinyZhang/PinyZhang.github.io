import { useState } from 'react';
import axios from 'axios';

const CLIENT_ID = '9506d781b79700867d72';
const CLIENT_SECRET = 'a29453969d08a7607d6529a987278707cc0ed359';

export function LoginButton() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: 'your-code', // 您需要通过重定向到 GitHub 来获取此代码
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const accessToken = response.data.access_token;
      const userResponse = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });

      setUser(userResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!user && <button onClick={handleLogin}>Login with GitHub</button>}
      {user && <p>Welcome, {user.login}!</p>}
    </>
  );
}