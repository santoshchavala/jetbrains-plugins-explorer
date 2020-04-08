import styled from '@emotion/styled';
import Button from '@webteam/button';
import { FilterIcon } from '@webteam/icons';
import { Col, Container, Row } from '@webteam/layout';
import { Popup, PopupContent, PopupFooter, PopupHeader } from '@webteam/popup';
import { useTextStyles } from '@webteam/typography';
import { Logo } from 'components';
import React, { CSSProperties, FunctionComponent, useState } from 'react';

interface Props {
  style?: CSSProperties;
}

const Wrapper = styled.header`
  background-color: #27282c;
  border-bottom: 1px solid #ccc;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 0.5rem;

  h1,
  h2 {
    margin: 0;
  }

  h1 > div {
    margin-left: 3.75rem;
  }
`;

const FilterCol = styled(Col)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const Header: FunctionComponent<Props> = ({ style }) => {
  const textCn = useTextStyles();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <Wrapper style={style}>
      <Container>
        <Row>
          <Col span={1}>
            <Logo noBeams />
          </Col>
          <StyledCol span={8}>
            <Content>
              <h1 className={textCn('wt-h2')}>Plugins Explorer</h1>
              <h2 className={textCn('wt-h5')}>
                Browse existing Open-Source plugins hosted on GitHub
              </h2>
            </Content>
          </StyledCol>
          <FilterCol span={3}>
            <Button
              icon={<FilterIcon />}
              iconPosition="right"
              size={'s'}
              onClick={() => setFiltersOpen(true)}
            >
              Filters
            </Button>
          </FilterCol>
        </Row>
      </Container>

      {filtersOpen && (
        <Popup onRequestClose={() => setFiltersOpen(false)}>
          <PopupHeader>Filters</PopupHeader>
          <PopupContent>xxx</PopupContent>
          <PopupFooter>
            <Button>Apply</Button>
          </PopupFooter>
        </Popup>
      )}
    </Wrapper>
  );
};

export default Header;
