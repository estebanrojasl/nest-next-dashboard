import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { useAxiosFetch, useLocalStorage } from './utils';
import { User } from '../types';
import Loading from './Loading';
import RoleBadge from './RoleBadge';
import { COLOR_PALLETTE } from '../styles/UI';

import Avatar from '../assets/avatar.png';

const UserRow = ({
  username,
  role,
  createdAt,
}: {
  username: string;
  role: string;
  createdAt: string;
}) => {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image className="w-8 h-8 rounded-full" src={Avatar} alt="avatar" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate capitalize">
            {username}
          </p>
          <p className="text-sm text-gray-500 truncate capitalize">
            <RoleBadge role={role} />
          </p>
        </div>
        <div className="items-center text-base font-semibold text-gray-900">
          <small>Created</small>
          <p>{moment(createdAt).format('YYYY-MM-DD')}</p>
        </div>
      </div>
    </li>
  );
};

const UserCard = () => {
  const [token] = useLocalStorage({
    key: 'accessToken',
  });

  const { resource } = useAxiosFetch({
    url: 'http://localhost:3000/api/users',
    method: 'POST',
    payload: JSON.stringify({ sort: 'createdAt', limit: 3 }),
    token,
  }) as { resource?: { users: User[] } };

  return (
    <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow">
      {resource?.users == null ? (
        <Loading />
      ) : (
        <>
          <ul className="divide-y divide-gray-200  mb-4">
            {resource.users.map((user) => (
              <UserRow
                username={user.username}
                role={user.role}
                createdAt={user.createdAt}
              />
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900">
              Latest users
            </h5>
            <Link
              href="/users"
              className="text-sm font-medium  hover:underline"
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

export default UserCard;
