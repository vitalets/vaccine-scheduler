import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"
import Credits from "./Credits"
import MDXButton from "./MDXButton"
import MuiLink from '@mui/material/Link';

const components = {
  Credits,
  Button: MDXButton,
  a: MuiLink,
  blockquote: props => <blockquote style={{ color: 'grey'}} {...props}/>,
};

export default function MyMDXProvider({ children }) {
  return (
    <MDXProvider components={components}>{children}</MDXProvider>
  )
}
