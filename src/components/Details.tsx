import Button from '@webteam/button';
import { Popup, PopupContent, PopupFooter, PopupHeader } from '@webteam/popup';
import { noop } from 'lodash';
import React from 'react';

const Details = () => (
  <Popup onRequestClose={noop}>
    <PopupHeader>Filters</PopupHeader>
    <PopupContent>xxx</PopupContent>
    <PopupFooter>
      <Button>Apply</Button>
    </PopupFooter>
  </Popup>
);

export default Details;
