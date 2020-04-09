import { noop } from 'lodash';
import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Filters, GlobalStore, Plugin, Sort, YesNoAny } from 'types';

const defaultValue: GlobalStore = {
  data: [],
  filteredData: [],
  filters: {
    downloads: 1,
    gradle: 'any',
    kotlin: 'any',
    query: '',
  },
  sort: {
    sort: undefined,
    order: 'ASC',
  },
  setData: noop,
  setFilteredData: noop,
  setFilters: noop,
  setSort: noop,
  reset: noop,
};

const Store = createContext<GlobalStore>(defaultValue);
const testYesNoAny = (filter: YesNoAny, value: boolean) =>
  filter === 'any' || (filter === 'yes' && value) || (filter === 'no' && !value);

export const PluginProvider: FunctionComponent = ({ children }) => {
  const [data, setData] = useState<Plugin[]>(defaultValue.data);
  const [filteredData, setFilteredData] = useState<Plugin[]>(defaultValue.filteredData);
  const [filters, setFilters] = useState<Filters>(defaultValue.filters);
  const [sort, setSort] = useState<Sort>(defaultValue.sort);

  const reset = useCallback(() => {
    setFilters(defaultValue.filters);
    setSort(defaultValue.sort);
  }, [setFilters, setSort]);

  useEffect(() => {
    const q = filters.query?.toLowerCase() || '';
    const queriedData = data.filter(
      (item) =>
        (!q || item.name.toLowerCase().includes(q)) &&
        item.downloads >= filters.downloads &&
        testYesNoAny(filters.gradle, item.gradle) &&
        testYesNoAny(filters.kotlin, item.kotlin),
    );

    setFilteredData(queriedData);
  }, [data, filters, sort]);

  return (
    <Store.Provider
      value={{
        data,
        filteredData,
        filters,
        sort,
        setData,
        setFilteredData,
        setFilters,
        setSort,
        reset,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export const useData = (): [typeof store.data, typeof store.setData] => {
  const store = useContext(Store);
  return [store.data, store.setData];
};

export const useFilteredData = (): [typeof store.filteredData, typeof store.setFilteredData] => {
  const store = useContext(Store);
  return [store.filteredData, store.setFilteredData];
};

export const useFilters = (): [typeof store.filters, typeof store.setFilters] => {
  const store = useContext(Store);
  return [store.filters, store.setFilters];
};

export const useReset = (): [typeof store.reset, boolean] => {
  const store = useContext(Store);
  return [store.reset, store.filteredData.length !== store.data.length];
};

export const useSort = (): [typeof store.sort, typeof store.setSort] => {
  const store = useContext(Store);
  return [store.sort, store.setSort];
};
