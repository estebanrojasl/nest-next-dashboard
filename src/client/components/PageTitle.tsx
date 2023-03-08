import React from 'react';
import { COLOR_PALLETTE } from '../styles/UI';

const PageTitle = ({ title }: { title?: string }) => {
  return (
    <h1
      className="text-3xl font-bold h-10"
      style={{ color: COLOR_PALLETTE.ORANGE }}
    >
      {title == null ? (
        <div className="animate-pulse rounded w-32 h-6 bg-slate-200" />
      ) : (
        <span>{title}</span>
      )}
    </h1>
  );
};

export default PageTitle;
