import React, { createContext, FunctionComponent, useCallback, useContext, useState } from 'react';
import { SortDirectionType } from 'react-virtualized';
import { Plugin } from 'types';
import { noop } from 'lodash';

const PluginContext = createContext<{
  plugin?: Plugin;
  setPlugin: (plugin: Plugin) => void;
  sort?: string;
  setSort: (sort: string) => void;
  sortDirection?: SortDirectionType;
  setSortDirection: (sortDirection: SortDirectionType) => void;
  query?: string;
  setQuery: (query?: string) => void;
  unsetPlugin: () => void;
}>({
  plugin: undefined,
  setPlugin: noop,
  sort: undefined,
  setSort: noop,
  sortDirection: undefined,
  setSortDirection: noop,
  query: undefined,
  setQuery: noop,
  unsetPlugin: noop,
});

export const PluginProvider: FunctionComponent = ({ children }) => {
  const [plugin, setPlugin] = useState<Plugin | undefined>();
  const [sort, setSort] = useState<string>();
  const [sortDirection, setSortDirection] = useState<SortDirectionType>();
  const [query, setQuery] = useState<string>();
  const unsetPlugin = useCallback(() => setPlugin(undefined), [setPlugin]);

  return (
    <PluginContext.Provider
      value={{
        plugin,
        setPlugin,
        sort,
        setSort,
        sortDirection,
        setSortDirection,
        unsetPlugin,
        query,
        setQuery,
      }}
    >
      {children}
    </PluginContext.Provider>
  );
};

export const PluginConsumer = PluginContext.Consumer;
export const usePluginContext = () => useContext(PluginContext);
