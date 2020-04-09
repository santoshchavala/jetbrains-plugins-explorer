import styled from '@emotion/styled';
import { LayoutContent } from '@webteam/layout';
import '@webteam/table';
import '@webteam/typography';
import { ThemeProvider } from '@webteam/ui-contexts';
import axios from 'axios';
import { Footer, Header, Table } from 'components';
import React, { useEffect } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { useData } from 'store';
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
  const [, setData] = useData();

  useEffect(() => {
    axios.get<Plugin[]>(DATA_URL).then((response) => setData(response.data));
  }, [setData]);

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
    <ThemeProvider theme={'light'}>
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
          <Table />
          {/*<Details />*/}
        </LayoutContent>
      </StyledStickyContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
