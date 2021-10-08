import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Credits() {
  return (
    <>
      <Typography paragraph variant="body1" color="text.secondary" sx={{mt: 2}}>
        Тест составила Елена Савинова, автор блога <Link href="https://t.me/VaccinesNoNonsense">"О прививках без истерик"</Link>.
      </Typography>
      <Typography paragraph variant="body1" color="text.secondary">
        <Link href="https://www.vaccina.info/donate">Поддержать АНО "Коллективный иммунитет"</Link>.
      </Typography>
    </>
  );
}
