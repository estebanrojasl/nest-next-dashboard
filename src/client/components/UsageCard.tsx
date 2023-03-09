import React from 'react';
import Link from 'next/link';

import { useAxiosFetch, useLocalStorage } from './utils';

import { COLOR_PALLETTE } from '../styles/UI';
import Loading from './Loading';

const UsageCard = () => {
  const [token] = useLocalStorage({
    key: 'accessToken',
  });

  const { resource } = useAxiosFetch({
    url: 'http://localhost:3000/api/users',
    method: 'POST',
    payload: JSON.stringify({ sort: '' }),
    token,
  }) as { resource?: { count?: number } };

  const userCount = resource?.count;

  return (
    <div className="flex flex-col justify-end w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow">
      {userCount == null ? (
        <Loading />
      ) : (
        <>
          <ul className="divide-gray-200 flex flex-col items-center justify-center mb-12">
            <dd className="mb-2 text-6xl font-extrabold">{userCount}</dd>
            <dt className="font-light text-gray-500 dark:text-gray-400">
              Users
            </dt>
          </ul>

          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900">
              Active users
            </h5>
            <Link
              href="/users"
              className="text-sm font-medium hover:underline"
              style={{ color: COLOR_PALLETTE.ORANGE }}
            >
              View all
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UsageCard;
