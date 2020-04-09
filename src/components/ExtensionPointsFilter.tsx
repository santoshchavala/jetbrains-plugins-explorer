import styled from '@emotion/styled';
import { Select } from '@webteam/select';
import React from 'react';

const StyledSelect = styled(Select)`
  min-width: 5rem;
  max-width: 10rem;
`;

const ExtensionPointsFilter = () => {
  const data: string[] = [];
  return (
    <StyledSelect
      options={data.map((value) => ({ label: value, value }))}
      size="s"
      isSearchable={true}
      placeholder="Select Extension Point..."
    />
  );
};

export default ExtensionPointsFilter;
