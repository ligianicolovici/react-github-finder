import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export const Spinner = () => (
  <Fragment>
    <img
      scr={spinner}
      alt="Loading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    ></img>
  </Fragment>
);
