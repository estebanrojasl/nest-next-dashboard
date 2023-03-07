import React from 'react';
import axios from 'axios';
import Image from 'next/image';

import Logo from '../assets/logo.png';
import { User } from '../types';

const authenticateUser = ({
  url,
  username,
}: {
  url: string;
  username: string;
}) => {
  return axios.post(
    url,
    { username },
    {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    },
  );
};

const Login = ({ setToken }: { setToken }) => {
  const [username, setUsername] = React.useState<string>('');
  const [signedUp, setSignedUp] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await authenticateUser({
      url: 'http://localhost:3000/api/auth/signin',
      username,
    });

    // console.log(response);

    if (response.data.access_token == null) {
      setError(true);
      return;
    }

    setToken(response.data.access_token);
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const response = (await authenticateUser({
      url: '/api/auth/signup',
      username,
    }).catch(function (error) {
      console.log(error);
    })) as {
      data: {
        username: string;
      };
    };

    if (response == null) {
      setError(true);
    } else {
      console.log('what is this');
      setSignedUp(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto" style={{ minHeight: 700 }}>
      <div className="flex flex-col justify-center items-center">
        <Image src={Logo} className="m-8 w-32 h-auto" alt="Logo" />

        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="username">Username</label>
          <div className="p-1" />

          <input
            type="text"
            className="bg-transparent border rounded border-gray-400 p-1"
            placeholder="E.g. user1@sw.com"
            id="username"
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(false);
            }}
          />
          <small className="text-gray-500">At least 8 characters</small>
          <div className="p-2" />

          {error === true && (
            <>
              <small className="text-red-500">
                An error ocurred. Please try again.
              </small>
            </>
          )}

          <div className="p-1" />

          <input
            type="submit"
            className={`${
              signedUp !== true ? 'animate-bounce' : ''
            } border rounded hover:bg-gray-100 p-1`}
            value="Login"
          />
          <div className="p-2" />
          {signedUp && (
            <button
              className="border rounded border-orange-600 bg-orange-500 hover:bg-orange-400 text-white p-1"
              onClick={onSignUp}
            >
              Sign up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
