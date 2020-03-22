import * as React from 'react';

import Alert from './Alert';

export default {
  title: 'atoms|Alert',
};

export const Info = () => <Alert type="info">Info</Alert>;
export const Warning = () => <Alert type="warning">Warning</Alert>;
export const Error = () => <Alert type="error">Error</Alert>;
