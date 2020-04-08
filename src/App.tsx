import styled from '@emotion/styled';
import { LayoutContent } from '@webteam/layout';
import '@webteam/table';
import '@webteam/typography';
import { ThemeProvider } from '@webteam/ui-contexts';
import axios from 'axios';
import { Details, Footer, Header, Table } from 'components';
import { orderBy } from 'lodash';
import { usePluginContext } from 'plugin-context';
import React, { useEffect, useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { Plugin } from 'types';

const DATA_URL =
  'https://raw.githubusercontent.com/hsz/jetbrains-plugins-explorer/master/src/data/data.json';

const StyledStickyContainer = styled(StickyContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    padding-bottom: 7rem;
  }
`;

const App = () => {
  const { sort, sortDirection } = usePluginContext();
  const [data, setData] = useState<Plugin[]>([]);
  const [processedData, setProcessedData] = useState<Plugin[]>(data);

  useEffect(() => {
    axios.get(DATA_URL).then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    setProcessedData(orderBy(data, sort, sortDirection?.toLowerCase() as any));
  }, [data, sort, sortDirection]);

  // const handleExtensionsChange = useCallback(v => {
  //   setSelectedExtensions(v);
  // }, []);

  // const extensions = flatten(
  //   data.reduce<string[]>((acc, plugin) => acc.concat(keys(plugin.extensions)), []),
  // );
  // const filteredData = data.filter(plugin =>
  //   isEmpty(difference(selectedExtensions, keys(plugin.extensions))),
  // );

  return (
    <ThemeProvider>
      <StyledStickyContainer>
        <Sticky>
          {({ style }) => (
            <div style={style}>
              <ThemeProvider theme={'dark'}>
                <Header />
              </ThemeProvider>
            </div>
          )}
        </Sticky>
        <LayoutContent>
          <Table data={processedData} />
          <Details />
        </LayoutContent>
      </StyledStickyContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
