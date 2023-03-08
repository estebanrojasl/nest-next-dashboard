import React from 'react';
import { NextPage } from 'next';

import moment from 'moment';

import { useAxiosFetch, useLocalStorage } from '../components/utils';
import { User } from '../types';

import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';

const Users: NextPage = () => {
  const [token] = useLocalStorage({ key: 'accessToken', initialValue: null });

  const { resource } = useAxiosFetch({
    url: 'http://localhost:3000/api/users',
    token,
  }) as { resource?: { users: User[] } };

  if (resource?.users == null) return <Loading />;

  return (
    <div className="p-4 mt-14 ml-64" style={{ minHeight: 700 }}>
      <PageTitle title="Users" />
      <div className="p-6" />

      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-gray-500 bg-gray-100">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Created</th>
              <th className="px-6 py-3">Updated</th>
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
