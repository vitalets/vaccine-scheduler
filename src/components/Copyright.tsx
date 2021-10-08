import * as React from 'react';
import Link from './Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Copyright() {
  return (
    <>
    <Divider sx={{ mt: 2 }}/>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 1, pb: 3 }}>
       {'Copyright © '}
      <Link color="inherit" to="/">
       НКО «Коллективный иммунитет»
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
    </>
  );
}



