import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from './Link';
import Grid from '@mui/material/Grid';

export type MDXButton = ButtonProps & { to: string };

export default function MDXButton({ children, to }: MDXButton) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <Button fullWidth component={Link} to={to} variant="contained" color="primary">
          {children}
        </Button>
      </Grid>
    </Grid>
  );
}


