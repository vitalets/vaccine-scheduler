import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from './Link';

export default function TopBar() {
  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ borderBottom: (t) => `1px solid ${t.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap component={Link} to="/" sx={{ textDecoration: 'none' }}>
           НКО «Коллективный иммунитет»
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
