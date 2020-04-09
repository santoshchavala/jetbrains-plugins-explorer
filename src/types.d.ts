import { ISocialShareProps } from '@webteam/social-share';
import { ISwitcherOptions } from '@webteam/switcher/typings/switcher';
import { SortDirectionType } from 'react-virtualized';

export type YesNoAny = 'yes' | 'no' | 'any';

export interface Config {
  socialShare: Partial<ISocialShareProps>;
  options: {
    downloadsFilter: ISwitcherOptions<number>[];
    yesNoAny: ISwitcherOptions<YesNoAny>[];
  };
}

export interface Filters {
  downloads: number;
  gradle: YesNoAny;
  kotlin: YesNoAny;
  query: string;
}

export interface Sort {
  sort?: string;
  order: SortDirectionType;
}

export interface GlobalStore {
  data: Plugin[];
  filteredData: Plugin[];
  filters: Filters;
  sort: Sort;

  setData: (data: Pluginp[]) => void;
  setFilteredData: (data: Plugin[]) => void;
  setFilters: (filters: Filters) => void;
  setSort: (sort: Sort) => void;
  reset: () => void;
}

interface Vendor {
  name: string;
  url: string;
}

interface Tag {
  id: number;
  name: string;
  privileged: boolean;
  link: string;
}

export interface JBSearchResponse {
  id: number;
  xmlId: string;
  link: string;
  name: string;
  preview: string;
  downloads: number;
  icon: string;
  previewImage: string;
  lastUpdateDate: number;
  rating: number;
  hasSource: boolean;
}

export interface JBPluginsResponse extends JBSearchResponse {
  approve: boolean;
  description: string;
  docText: string;
  email: string;
  family: string; // enum?
  vendor: Vendor;
  urls: {
    url: string;
    forumUrl: string;
    licenseUrl: string;
    bugtrackerUrl: string;
    docUrl: string;
    sourceCodeUrl: string;
  };
  tags: Tag[];
  removalRequested: boolean;
  hasUnapprovedUpdate: boolean;
  readyForSale: boolean;
  screenshots: string[];

  repository: string;
}

export interface Plugin extends JBPluginsResponse {
  branch: string;
  kotlin: boolean;
  gradle: boolean;
  extensions: {
    [key: string]: string[];
  };
}

export interface JBSearchResult {
  plugins: JBSearchResponse[];
  total: number;
  correctedQuery: string;
}

export interface GHSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: SearchItem[];
}

export interface GHReposResult {
  default_branch: string;
}

export interface GHTreesResult {
  sha: string;
  url: string;
  tree: {
    path: string;
    mode: string;
    type: string;
    sha: string;
    size: number;
    url: string;
  }[];
  truncated: boolean;
}

interface SearchItem {
  name: string;
  path: string;
}
