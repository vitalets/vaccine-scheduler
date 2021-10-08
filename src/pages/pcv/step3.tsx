import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '../../components/Link';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { navigate } from 'gatsby';

const checkboxes = [
  'Я курю (табак)',
  'У меня недавно был острый средний отит / менингит / пневмония, от которых я сейчас выздоравливаю',
  'У меня хроническое заболевание легких и/или бронхиальная астма',
  'У меня хроническое заболевание сердечно-сосудистой системы',
  'У меня хроническое заболевание печени и/или почек',
  'У меня сахарный диабет',
  'У меня нет селезенки или она не работает',
  'У меня туберкулез',
  'У меня иммунодефицит (в том числе от ВИЧ-инфекции или от лечения онкологических заболеваний)',
  'У меня была пересадка костного мозга или органов',
  'У меня установлен кохлеарный имплант / мне планируют установить кохлеарный имплант',
  'У меня подтекает спинномозговая жидкость',
  'Я живу в интернате, армии / другом организованном коллективе',
  'Я страдаю алкоголизмом',
];


export default function Step3() {
  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (const input of event.currentTarget.elements) {
      if ((input as HTMLFormElement).checked) {
        navigate('../result-need-vac');
        return;
      }
    }
    navigate('../result-no-vac');
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
              {checkboxes.map(label => <FormControlLabel control={<Checkbox />} label={label} sx={{ mb: 1 }}/>)}
            </FormGroup>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button to="../step2" fullWidth component={Link} variant="outlined" color="primary">Назад</Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button fullWidth type="submit" variant="contained" color="primary">Дальше</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
