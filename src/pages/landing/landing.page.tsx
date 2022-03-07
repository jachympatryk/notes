import React from 'react';

import { useQueryParams } from 'hooks';

type QueryParams = {
  page: number;
  perPage: number;
};

export const LandingPage: React.FC = () => {
  const query = useQueryParams<QueryParams>();

  const setParam = () => {
    query.setParam('page', 12);
  };

  const setParams = () => {
    query.setParams({ page: 1, perPage: 10 });
  };

  const deletePageParam = () => {
    query.deleteQuery('page');
  };

  const deletePerPageParam = () => {
    query.deleteQuery('perPage');
  };

  return (
    <div>
      <p>Landing page</p>
      <button type="button" onClick={setParam}>
        click to set single query
      </button>
      <button type="button" onClick={setParams}>
        click to set queries
      </button>
      <button type="button" onClick={deletePageParam}>
        click to delete page query
      </button>
      <button type="button" onClick={deletePerPageParam}>
        click to delete per page query
      </button>
    </div>
  );
};
