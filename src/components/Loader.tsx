import styled from '@emotion/styled';
import { LoadingIcon } from '@webteam/icons';
import React from 'react';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Loader = () => (
  <LoaderWrapper>
    <LoadingIcon size="l" />
  </LoaderWrapper>
);

export default Loader;
