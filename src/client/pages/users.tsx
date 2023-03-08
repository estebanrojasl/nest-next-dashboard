import React from 'react';
import { NextPage } from 'next';
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from '@tremor/react';

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
      <Card>
        <Table marginTop="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Username</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resource?.users.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.username}</TableCell>

                <TableCell>
                  <Badge
                    text={item.role}
                    color="blue"
                    size="sm"
                    tooltip=""
                    marginTop="mt-0"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Users;
