import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Link from '../../components/Link';
import { useStorageState } from '../../utils';
import { navigate } from 'gatsby';
import { LINKS } from './_links';

export default function Step1() {
  const [ dob, setDob ] = useStorageState('dob');
  const [ sex, setSex ] = useStorageState('sex');

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) {
      navigate(LINKS.step2);
    }
  };

  return (
    <>
      <form onSubmit={handleNext}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Заполните данные<br /> (свои или ребенка)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="dob"
              label="Дата рождения"
              value={dob}
              onChange={e => setDob(e.target.value)}
              required
              autoFocus
              autoComplete="off"
              inputProps={{ pattern: '\\d{2}\\.\\d{2}\\.\\d{4}', title: 'дд.мм.гггг' }}
              placeholder="дд.мм.гггг"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Пол *</FormLabel>
              <RadioGroup
                row
                aria-label="Пол"
                name="sex"
                value={sex}
                onChange={e => setSex(e.target.value)}
              >
                <FormControlLabel value="male" control={<Radio required />} label="М" />
                <FormControlLabel value="female" control={<Radio required />} label="Ж" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button to={LINKS.start} fullWidth component={Link} variant="outlined" color="primary">Назад</Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button fullWidth type="submit" variant="contained" color="primary">Дальше</Button>
          </Grid>
      </Grid>
      </form>
    </>
  );
}


