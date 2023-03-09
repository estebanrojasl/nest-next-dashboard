import React from 'react';

const RoleBadge = ({ role }: { role: string }) => {
  return role === 'admin' ? (
    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
      {role}
    </span>
  ) : (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
      {role}
    </span>
  );
};

export default RoleBadge;
