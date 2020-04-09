import Button from '@webteam/button';
import { Popup, PopupContent, PopupFooter, PopupHeader } from '@webteam/popup';
import Switcher from '@webteam/switcher';
import config from 'config';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { useFilters } from 'store';
import { YesNoAny } from 'types';

interface Props {
  onClose: () => void;
}

const FiltersPopup: FunctionComponent<Props> = ({ onClose }) => {
  const [filters, setFilters] = useFilters();
  const [downloads, setDownloads] = useState(filters.downloads);
  const [gradle, setGradle] = useState(filters.gradle);
  const [kotlin, setKotlin] = useState<YesNoAny>(filters.kotlin);

  const handleApply = useCallback(() => {
    setFilters({ ...filters, downloads, gradle, kotlin });
    onClose();
  }, [filters, setFilters, downloads, gradle, kotlin, onClose]);

  return (
    <Popup onRequestClose={onClose}>
      <PopupHeader>Filters</PopupHeader>
      <PopupContent>
        <table className="wt-table wt-table_theme_light wt-table_size_m">
          <tbody>
            <tr>
              <td>Written in Kotlin</td>
              <td>
                <Switcher
                  options={config.options.yesNoAny}
                  defaultValue={kotlin}
                  onChange={setKotlin}
                  size="s"
                />
              </td>
            </tr>
            <tr>
              <td>Set with Gradle</td>
              <td>
                <Switcher
                  options={config.options.yesNoAny}
                  defaultValue={gradle}
                  onChange={setGradle}
                  size="s"
                />
              </td>
            </tr>
            <tr>
              <td>Downloads</td>
              <td>
                <Switcher
                  options={config.options.downloadsFilter}
                  defaultValue={downloads}
                  onChange={setDownloads}
                  size="s"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PopupContent>
      <PopupFooter>
        <Button onClick={handleApply}>Apply</Button>
      </PopupFooter>
    </Popup>
  );
};

export default FiltersPopup;
