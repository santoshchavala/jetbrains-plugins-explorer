import styled from '@emotion/styled';
import { CodeIcon, DownloadIcon, GitHubIcon, StampIcon, TagIcon } from '@webteam/icons';
import Tag from '@webteam/tag';
import '@webteam/tag/lib/styles';
import Tooltip from '@webteam/tooltip';
import { useTextStyles } from '@webteam/typography';
import { BooleanIcon, GoToTop, GradleIcon, KotlinIcon, Loader } from 'components';
import { keys } from 'lodash';
import numeral from 'numeral';
import React, { Component, FunctionComponent, useCallback, useRef, useState } from 'react';
import TimeAgo from 'react-timeago';
import { AutoSizer, Column, SortIndicator, Table, TableHeaderRenderer } from 'react-virtualized';
import { ColumnProps } from 'react-virtualized/dist/es/Table';
import 'react-virtualized/styles.css';
import { useData, useFilteredData, useSort } from 'store';
import { Plugin } from 'types';

interface IColumn {
  title: string;
  key: string;
  render: (plugin: Plugin, textCn: ReturnType<typeof useTextStyles>) => JSX.Element | string;
  icon?: typeof Component | FunctionComponent;
  align?: 'left' | 'center' | 'right';
  props: Partial<ColumnProps> & Pick<ColumnProps, 'width' | 'label'>;
}

const columns: IColumn[] = [
  {
    title: '',
    key: 'name',
    render: ({ name, id, preview }, textCn) => (
      <Tooltip size="s" placement="bottom-start" content={preview}>
        <a
          href={`https://plugins.jetbrains.com/plugin/${id}`}
          title={name}
          className={textCn('wt-link')}
        >
          {name}
        </a>
      </Tooltip>
    ),
    props: {
      width: 200,
    },
  },
  {
    title: 'Repository',
    key: 'repository',
    icon: GitHubIcon,
    render: ({ repository }, textCn) => (
      <a href={`https://github.com/${repository}`} title={repository} className={textCn('wt-link')}>
        {repository}
      </a>
    ),
    props: {
      width: 250,
    },
  },
  {
    title: 'Downloads',
    key: 'downloads',
    icon: DownloadIcon,
    render: ({ downloads }) => (
      <div title={downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}>
        {numeral(downloads).format('0 a').toUpperCase()}
      </div>
    ),
    align: 'right',
    props: {
      width: 125,
    },
  },
  {
    title: 'Last updated',
    key: 'lastUpdateDate',
    icon: StampIcon,
    render: ({ lastUpdateDate }) => <TimeAgo date={lastUpdateDate} />,
    align: 'right',
    props: {
      width: 150,
    },
  },
  {
    title: 'Extension Points',
    key: 'eps',
    icon: CodeIcon,
    render: ({ extensions }) => keys(extensions).length.toString(),
    align: 'center',
    props: {
      width: 100,
    },
  },
  {
    title: 'Gradle',
    key: 'gradle',
    icon: GradleIcon,
    render: ({ gradle }) => <BooleanIcon value={gradle} />,
    align: 'center',
    props: {
      width: 100,
    },
  },
  {
    title: 'Kotlin',
    key: 'kotlin',
    icon: KotlinIcon,
    render: ({ kotlin }) => <BooleanIcon value={kotlin} />,
    align: 'center',
    props: {
      width: 100,
    },
  },
  {
    title: 'Tags',
    key: 'tags',
    icon: TagIcon,
    render: ({ tags = [] }) => (
      <TagsContainer>
        <div>
          {tags.map((tag) => (
            <StyledTag key={tag.id} size="xs">
              {tag.name}
            </StyledTag>
          ))}
        </div>
      </TagsContainer>
    ),
    props: {
      width: 200,
      flexGrow: 1,
    },
  },
];

const Wrapper = styled.div`
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagsContainer = styled.div`
  position: relative;

  div {
    overflow-x: scroll;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, transparent, #fff);
    width: 2rem;
  }

  &:hover:after {
    background: transparent;
  }
`;

const StyledTag = styled(Tag)`
  margin-right: 0.5rem;
`;

const NoRowsRendererWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const XTable = () => {
  const [filteredData] = useFilteredData();
  const [data] = useData();
  const [sort, setSort] = useSort();
  const [scrollPosition, setScrollPosition] = useState(0);
  const textCn = useTextStyles();
  const tableRef = useRef<Table>(null);
  const goToTop = useCallback(() => {
    tableRef.current?.scrollToPosition(0);
  }, [tableRef]);

  const handleRowGetter = useCallback(({ index }) => filteredData[index], [filteredData]);
  const handleScroll = useCallback(
    ({ scrollTop }) => {
      setScrollPosition(scrollTop);
    },
    [setScrollPosition],
  );
  const handleSort = useCallback(
    ({ sortBy, sortDirection }) => {
      setSort({ sort: sortBy, order: sortDirection });
      goToTop();
    },
    [goToTop, setSort],
  );
  const handleHeaderRenderer = useCallback(
    (column): TableHeaderRenderer => ({ sortBy, dataKey }) => {
      const Icon = column.icon;
      return Icon ? (
        <Tooltip size="s" placement="bottom" content={column.title}>
          <HeaderContainer>
            <Icon />
            {sortBy === dataKey && <SortIndicator key="SortIndicator" sortDirection={sort.order} />}
          </HeaderContainer>
        </Tooltip>
      ) : (
        column.title
      );
    },
    [sort],
  );
  const handleCellRenderer = useCallback(
    ({ columnIndex, rowData }) => (
      <div style={{ textAlign: columns[columnIndex].align }}>
        {columns[columnIndex].render(rowData, textCn)}
      </div>
    ),
    [textCn],
  );
  const handleNoRowsRenderer = useCallback(
    () => (
      <NoRowsRendererWrapper>
        {!data.length ? (
          <Loader />
        ) : (
          <h3 className={textCn('wt-h3')}>No plugins are matching the given criteria.</h3>
        )}
      </NoRowsRendererWrapper>
    ),
    [data, textCn],
  );

  return (
    <Wrapper>
      <AutoSizer>
        {({ height, width }) => (
          <>
            {scrollPosition > 500 && <GoToTop onClick={goToTop} />}
            <Table
              ref={tableRef}
              width={width}
              height={height}
              headerHeight={64}
              rowHeight={30}
              rowCount={filteredData.length}
              rowGetter={handleRowGetter}
              noRowsRenderer={handleNoRowsRenderer}
              sort={handleSort}
              sortBy={sort.sort}
              sortDirection={sort.order}
              className="wt-data-grid wt-data-grid_size_m wt-data-grid_theme_light wt-text-2"
              headerClassName="wt-data-grid__row_header"
              rowClassName="wt-data-grid__row"
              onScroll={handleScroll}
            >
              {columns.map((column) => (
                <Column
                  key={column.key}
                  className="wt-data-grid__cell"
                  label={column.title}
                  dataKey={column.key}
                  headerRenderer={handleHeaderRenderer(column)}
                  cellRenderer={handleCellRenderer}
                  {...column.props}
                />
              ))}
            </Table>
          </>
        )}
      </AutoSizer>
    </Wrapper>
  );
};

export default XTable;
