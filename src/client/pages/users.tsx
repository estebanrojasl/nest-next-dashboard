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

const Users: NextPage = () => {
  const [token] = useLocalStorage({ key: 'accessToken', initialValue: null });

  const { resource } = useAxiosFetch({
    url: 'http://localhost:3000/api/users',
    token,
  }) as { resource?: { users: User[] } };

  console.log('users', resource?.users);

  if (resource?.users == null) return <Loading />;

  return (
    <div className="p-4 mt-14 ml-64">
      <h1>Users</h1>
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

const data = [
  {
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Simonetta Sommaruga',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Alain Berset',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Ueli Maurer',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
];
