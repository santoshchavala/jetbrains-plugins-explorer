import styled from '@emotion/styled';
import { CheckIcon, CloseIcon } from '@webteam/icons';
import React, { FunctionComponent } from 'react';

interface Props {
  value: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BooleanIcon: FunctionComponent<Props> = ({ value }) => (
  <Wrapper>
    {value ? (
      <CheckIcon size="xs" color="#4DBB5F" />
    ) : (
      <CloseIcon size="xs" color="rgba(39, 40, 44, 0.20)" />
    )}
  </Wrapper>
);

export default BooleanIcon;
