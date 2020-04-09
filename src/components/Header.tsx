import styled from '@emotion/styled';
import Button from '@webteam/button';
import { FilterIcon, UndoIcon } from '@webteam/icons';
import { Col, Container, Row } from '@webteam/layout';
import { useTextStyles } from '@webteam/typography';
import { ExtensionPointsFilter, FiltersPopup, Logo, SearchFilter } from 'components';
import React, { CSSProperties, FunctionComponent, useCallback, useState } from 'react';
import { useReset } from 'store';

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

  & > * {
    margin-right: 1rem;
  }
`;

const Header: FunctionComponent<Props> = ({ style }) => {
  const textCn = useTextStyles();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [resetFilters, filtersApplied] = useReset();
  const handleFiltersShow = useCallback(() => setFiltersOpen(true), [setFiltersOpen]);
  const handleFiltersHide = useCallback(() => setFiltersOpen(false), [setFiltersOpen]);

  return (
    <Wrapper style={style}>
      <Container>
        <Row>
          <Col span={1}>
            <Logo noBeams />
          </Col>
          <StyledCol span={5}>
            <Content>
              <h1 className={textCn('wt-h2')}>Plugins Explorer</h1>
              <h2 className={textCn('wt-h5')}>
                Browse existing Open-Source plugins hosted on GitHub
              </h2>
            </Content>
          </StyledCol>
          <FilterCol span={6}>
            <ExtensionPointsFilter />
            <SearchFilter />
            <Button icon={<FilterIcon />} size="xs" onClick={handleFiltersShow}>
              Filters {filtersApplied && '*'}
            </Button>
            <Button
              mode="outline"
              disabled={!filtersApplied}
              icon={<UndoIcon />}
              size="xs"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </FilterCol>
        </Row>
      </Container>

      {filtersOpen && <FiltersPopup onClose={handleFiltersHide} />}
    </Wrapper>
  );
};

export default Header;
