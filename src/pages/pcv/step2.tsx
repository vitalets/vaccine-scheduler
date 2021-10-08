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

export default function Step2() {
  const { age, isMale } = useStorage();

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (const input of event.currentTarget.elements) {
      if ((input as HTMLFormElement).checked) {
        navigate('../result-free-vac');
        return;
      }
    }
    navigate('../step3');
  };

  return (
    <>
      <form onSubmit={handleNext}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Выберите справедливые утверждения
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              {(isMale && age < 27) ? <FormControlLabel control={<Checkbox />} label="Я призывник" /> : null}
              <FormControlLabel control={<Checkbox />} label="У меня есть заболевание легких" />
              {(age >= 60) ? <FormControlLabel control={<Checkbox />} label={`Я пенсионер${isMale ? '' : 'ка'} и живу в интернате / доме престарелых и т. п.`} /> : null}
            </FormGroup>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button to="../step1" fullWidth component={Link} variant="outlined" color="primary">Назад</Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button fullWidth type="submit" variant="contained" color="primary">Дальше</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
