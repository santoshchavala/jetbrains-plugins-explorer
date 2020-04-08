import styled from '@emotion/styled';
import { SearchIcon } from '@webteam/icons';
import Input from '@webteam/input';
import { usePluginContext } from 'plugin-context';
import React, { useCallback } from 'react';

const SearchInput = styled(Input)`
  margin-right: 2rem;

  input {
    width: 20rem;
  }
`;

const Search = () => {
  const { setQuery } = usePluginContext();
  const handleChange = useCallback(
    (e) => {
      e.persist();
      setQuery(e.target.value);
    },
    [setQuery],
  );

  return <SearchInput icon={<SearchIcon />} type="search" onChange={handleChange} />;
};

export default Search;
