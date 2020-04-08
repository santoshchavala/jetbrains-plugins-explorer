import styled from '@emotion/styled';
import {
  CheckIcon,
  CloseIcon,
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  StampIcon,
  TagIcon,
} from '@webteam/icons';
import Tag from '@webteam/tag';
import Tooltip from '@webteam/tooltip';
import { useTextStyles } from '@webteam/typography';
import { BooleanIcon, GradleIcon, KotlinIcon, Loader } from 'components';
import { keys } from 'lodash';
import { PluginConsumer } from 'plugin-context';
import React, { Component, FunctionComponent } from 'react';
import TimeAgo from 'react-timeago';
import numeral from 'numeral';
import { AutoSizer, Column, SortIndicator, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { Plugin } from 'types';

interface Props {
  data: Plugin[];
}

interface IColumn {
  title: string;
  key: string;
  width: number;
  render: (plugin: Plugin, textCn: ReturnType<typeof useTextStyles>) => JSX.Element | string;
  icon?: typeof Component | FunctionComponent;
  align?: 'left' | 'center' | 'right';
}

const columns: IColumn[] = [
  {
    title: '',
    key: 'name',
    width: 200,
    render: ({ name, id, preview }, textCn) => (
      <Tooltip size="s" placement="bottom-start" content={preview}>
        <a href={`https://plugins.jetbrains.com/plugin/${id}`} className={textCn('wt-link')}>
          {name}
        </a>
      </Tooltip>
    ),
  },
  {
    title: 'Repository',
    key: 'repository',
    icon: GitHubIcon,
    width: 250,
    render: ({ repository }, textCn) => (
      <a href={`https://github.com/${repository}`} className={textCn('wt-link')}>
        {repository}
      </a>
    ),
  },
  {
    title: 'Downloads',
    key: 'downloads',
    icon: DownloadIcon,
    width: 125,
    render: ({ downloads }) => (
      <div title={downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}>
        {numeral(downloads).format('0 a').toUpperCase()}
      </div>
    ),
    align: 'right',
  },
  {
    title: 'Last updated',
    key: 'lastUpdateDate',
    icon: StampIcon,
    width: 150,
    render: ({ lastUpdateDate }) => <TimeAgo date={lastUpdateDate} />,
    align: 'right',
  },
  {
    title: 'Extensions',
    key: 'extensions',
    icon: CodeIcon,
    width: 100,
    render: ({ extensions }) => <Tag size="xs">{keys(extensions).length}</Tag>,
    align: 'center',
  },
  {
    title: 'Gradle',
    key: 'gradle',
    icon: GradleIcon,
    width: 100,
    render: ({ gradle }) => <BooleanIcon value={gradle} />,
    align: 'center',
  },
  {
    title: 'Kotlin',
    key: 'kotlin',
    icon: KotlinIcon,
    width: 100,
    render: ({ kotlin }) => <BooleanIcon value={kotlin} />,
    align: 'center',
  },
  {
    title: 'Tags',
    key: 'tags',
    icon: TagIcon,
    width: 100,
    render: ({ tags = [] }) => (
      <>
        {tags.map((tag) => (
          <Tag key={tag.id} size="xs">
            {tag.name}
          </Tag>
        ))}
      </>
    ),
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

const XTable: FunctionComponent<Props> = ({ data }) => {
  const textCn = useTextStyles();

  return (
    <Wrapper>
      <PluginConsumer>
        {({ setPlugin, sort, setSort, sortDirection, setSortDirection }) => (
          <AutoSizer>
            {({ height, width }) => (
              <Table
                width={width}
                height={height}
                headerHeight={64}
                rowHeight={30}
                rowCount={data.length}
                rowGetter={({ index }) => data[index]}
                noRowsRenderer={() => <Loader />}
                sort={({ sortBy, sortDirection }) => {
                  setSort(sortBy);
                  setSortDirection(sortDirection);
                }}
                sortBy={sort}
                sortDirection={sortDirection}
                className="wt-data-grid wt-data-grid_size_m wt-data-grid_theme_light wt-text-2"
                headerClassName="wt-data-grid__row_header"
                rowClassName="wt-data-grid__row"
              >
                {columns.map(({ key, title, width, icon: Icon }) => (
                  <Column
                    key={key}
                    className="wt-data-grid__cell"
                    label={title}
                    dataKey={key}
                    width={width}
                    headerRenderer={({ sortBy, dataKey }) =>
                      Icon ? (
                        <Tooltip size="s" placement="bottom" content={title}>
                          <HeaderContainer>
                            <Icon />
                            {sortBy === dataKey && (
                              <SortIndicator key="SortIndicator" sortDirection={sortDirection} />
                            )}
                          </HeaderContainer>
                        </Tooltip>
                      ) : (
                        title
                      )
                    }
                    cellRenderer={({ columnIndex, rowData }) => (
                      <div style={{ textAlign: columns[columnIndex].align }}>
                        {columns[columnIndex].render(rowData, textCn)}
                      </div>
                    )}
                  />
                ))}
              </Table>
            )}
          </AutoSizer>
        )}
      </PluginConsumer>
    </Wrapper>
  );
};

export default XTable;
