import React from 'react';
import { FormattedMessage } from 'react-intl';

// eslint-disable-next-line import/prefer-default-export
export const t = (id, props) => <FormattedMessage id={id} {...props} />;
