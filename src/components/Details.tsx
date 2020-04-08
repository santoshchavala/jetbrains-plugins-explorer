import Button from '@webteam/button';
import { Popup, PopupContent, PopupFooter, PopupHeader } from '@webteam/popup';
import { PluginConsumer } from 'plugin-context';
import React from 'react';

const Details = () => (
  <PluginConsumer>
    {({ plugin, unsetPlugin }) =>
      plugin ? (
        <Popup onRequestClose={unsetPlugin}>
          <PopupHeader>Filters</PopupHeader>
          <PopupContent>xxx</PopupContent>
          <PopupFooter>
            <Button>Apply</Button>
          </PopupFooter>
        </Popup>
      ) : null
    }
  </PluginConsumer>
);

export default Details;
