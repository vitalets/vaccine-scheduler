// See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#usage
import * as React from 'react';
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
