import styled from '@emotion/styled';
import Button from '@webteam/button';
import { SearchIcon } from '@webteam/icons';
import Input from '@webteam/input';
import React, { useCallback, useRef } from 'react';
import { useFilters } from 'store';

const StyledInput = styled(Input)`
  input {
    min-width: 5rem;
    max-width: 10rem;
  }
`;

const SearchFilter = () => {
  const ref = useRef<Input>(null);
  const [filters, setFilters] = useFilters();
  const handleChange = useCallback(
    (e) => {
      e.persist();
      setFilters({ ...filters, query: e.target.value });
    },
    [filters, setFilters],
  );

  return (
    <StyledInput
      ref={ref}
      icon={<SearchIcon />}
      size="s"
      type="search"
      value={filters.query}
      onChange={handleChange}
    />
  );
};

export default SearchFilter;
