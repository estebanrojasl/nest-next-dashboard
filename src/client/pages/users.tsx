import React, { useState } from 'react';
import { NextPage } from 'next';

import moment from 'moment';

import { useAxiosFetch } from '../components/utils';
import { User } from '../types';

import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';

const Users: NextPage = ({ token }: { token?: string }) => {
  const [sort, setSort] = useState<string>();

  const { resource } = useAxiosFetch({
    url: 'http://localhost:3000/api/users',
    method: 'POST',
    payload: JSON.stringify({ sort }),
    token,
  }) as { resource?: { users: User[] } };

  if (resource?.users == null) return <Loading />;

  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle title="Users" />
      <div className="p-2" />

      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-gray-500 bg-gray-100">
            <tr>
              <th className="px-6 py-3">
                <button
                  onClick={() =>
                    setSort((prevState) =>
                      prevState === 'username' ? '-username' : 'username',
                    )
                  }
                >
                  Username
                </button>
              </th>
              <th className="px-6 py-3">
                <button
                  onClick={() =>
                    setSort((prevState) =>
                      prevState === 'role' ? '-role' : 'role',
                    )
                  }
                >
                  Role
                </button>
              </th>
              <th className="px-6 py-3">
                <button
                  onClick={() =>
                    setSort((prevState) =>
                      prevState === 'createdAt' ? '-createdAt' : 'createdAt',
                    )
                  }
                >
                  Created
                </button>
              </th>
              <th className="px-6 py-3">
                <button
                  onClick={() =>
                    setSort((prevState) =>
                      prevState === 'updatedAt' ? '-updatedAt' : 'updatedAt',
                    )
                  }
                >
                  Updated
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {resource?.users.map((user) => (
              <tr key={user._id} className="border-b border-gray-200">
                <th
                  scope="row"
                  className="p-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.username}
                </th>
                <td className="p-4 capitalize">
                  {user.role === 'admin' ? (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                      {user.role}
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                      {user.role}
                    </span>
                  )}
                </td>
                <td className="p-4">
                  {user.createdAt
                    ? moment(user.createdAt).format('DD-MM-YYYY')
                    : '-'}
                </td>
                <td className="p-4">
                  {user.updatedAt
                    ? moment(user.updatedAt).format('DD-MM-YYYY')
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
