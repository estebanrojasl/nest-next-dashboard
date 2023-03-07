import React from 'react';
import axios from 'axios';

const loginUser = ({ username }: { username: string }) => {
  return axios.post(
    'http://localhost:3000/api/auth/signin',
    { username },
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
};

const Login = ({ setToken }: { setToken }) => {
  const [username, setUsername] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = (await loginUser({
      username,
    })) as {
      data: {
        access_token: string;
      };
    };

    if (data.access_token == null) {
      setError(true);
      return;
    }

    setToken(data.access_token);
  };

  // const token = useToken();

  // if (token != null) {
  //   router.push('/');
  // }

  return (
    <div className="max-w-2xl mx-auto" style={{ minHeight: 700 }}>
      <div className="flex justify-center items-start">
        {/* <img
          src={DarthVader}
          alt="storm-trooper"
          className="px-8 pt-16"
          style={{ height: 500 }}
        /> */}
        <div className="p-8">
          <h2 className="text-gray-100">Login</h2>

          <div className="p-6" />

          <form id="login-form" onSubmit={onSubmit} className="flex flex-col">
            <label htmlFor="username">Username:</label>

            <input
              type="text"
              className="bg-transparent border rounded border-gray-400 p-1"
              placeholder="E.g. user1@sw.com"
              id="username"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="p-2" />

            {error === true && (
              <>
                <small className="text-red-500">
                  An error ocurred. Please try again.
                </small>
              </>
            )}

            <div className="p-2" />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
