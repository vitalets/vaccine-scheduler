import * as React from 'react';
import MuiLink, { LinkProps } from '@mui/material/Link';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

export default GatsbyLink;

// export default function Link(props: LinkProps) {
//   return (
//     <MuiLink component={GatsbyLink} {...props}/>
//   );
// }

// see: https://github.com/hupe1980/gatsby-theme-material-ui/blob/master/packages/gatsby-material-ui-components/src/link.tsx

// https://github.com/gatsbyjs/gatsby/issues/16682

//type CustomGatsbyLink = Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>

// const Link = React.forwardRef((props, ref) => {
//   // @ts-ignore
//   return <MuiLink component={GatsbyLink} ref={ref} {...props}/>;
// });
// export default Link;


// export const Link = React.forwardRef<
//   HTMLAnchorElement,
//   LinkProps & { to?: string }
// >((props, ref) => {
//   const { to } = props;
//   return to ? (
//     <MuiLink ref={ref} component={GatsbyLink} to={to} {...props} />
//   ) : (
//     <MuiLink ref={ref} {...props} />
//   );
// })
