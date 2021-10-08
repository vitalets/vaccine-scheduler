import * as React from 'react';
import Link from '../components/Link';
import Typography from '@mui/material/Typography';

export default function IndexRoute() {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Календарь вакцинации
      </Typography>
      <ul>
        <li><Link to="/pcv">Кому нужна прививка от пневмококковой инфекции?</Link></li>
        <li>Кому положена прививка от менингококковой инфекции в плановом порядке?</li>
        <li>Кому нужна прививка от ветряной оспы?</li>
      </ul>

    </>
  )
}
