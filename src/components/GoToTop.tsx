import styled from '@emotion/styled';
import { UploadIcon } from '@webteam/icons';

const GoToTop = styled(UploadIcon)`
  position: absolute;
  z-index: 2;
  right: 3rem;
  bottom: 3rem;
  cursor: pointer;
  background: rgba(39, 40, 44, 0.05);
  border-radius: 10rem;
  padding: 1rem;

  &:hover {
    background-color: rgba(39, 40, 44, 0.4);
  }
`;

export default GoToTop;
