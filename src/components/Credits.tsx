import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Credits() {
  return (
    <Typography variant="body1" color="text.secondary">
      <p>
      Тест составила Елена Савинова, автор блога <Link href="https://t.me/VaccinesNoNonsense">"О прививках без истерик"</Link>.
      </p>
      <p>
        <Link href="https://www.vaccina.info/donate">Поддержать АНО "Коллективный иммунитет"</Link>.
      </p>
    </Typography>
  );
}



