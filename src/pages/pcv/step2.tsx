import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '../../components/Link';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { useStorage } from '../../utils';
import { navigate } from 'gatsby';
import { LINKS } from './_links';

function getCheckboxes(age: number, isMale: boolean) {
  return [
    isMale && age <= 27 && 'Я призывник',
    'У меня есть заболевание легких',
    age >= 59 && `Я пенсионер${isMale ? '' : 'ка'} и живу в интернате / доме престарелых и т. п.`,
  ].filter(Boolean);
}

export default function Step2() {
  const { age, isMale } = useStorage();

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (const input of event.currentTarget.elements) {
      if ((input as HTMLFormElement).checked) {
        navigate(LINKS.resultFreeVac);
        return;
      }
    }
    navigate(LINKS.step3);
  };

  return (
    <form onSubmit={handleNext}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Выберите справедливые утверждения
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            {getCheckboxes(age, isMale)
              .map(label => <FormControlLabel control={<Checkbox />} key={label} label={label} sx={{ mb: 1 }} />)}
          </FormGroup>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button to={LINKS.step1} fullWidth component={Link} variant="outlined" color="primary">Назад</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button fullWidth type="submit" variant="contained" color="primary">Дальше</Button>
        </Grid>
      </Grid>
    </form>
  );
}
