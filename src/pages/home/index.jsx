import './style.css';
import { Container, Button, Grid, Typography } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm" disableGutters className="custom_container">
      <Typography variant="h4" align="right" id="resultado" gutterBottom>
        0
      </Typography>

      <Grid container spacing={2}>

        {/*linha 1*/}
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="softGrey">{'<'}</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="softGrey">c</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="yellow">+/-</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="yellow">/</Button>
        </Grid>
        
        {/*linha 2*/}
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">1</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">2</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="yellow">x</Button>
        </Grid>
        
        {/*linha 3*/}
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">4</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">5</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">6</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="yellow">+</Button>
        </Grid>
        
        {/*linha 4*/}
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">7</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">8</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">9</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="yellow">-</Button>
        </Grid>
        
        {/*linha 5*/}
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" className="colspan2 grey">0</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="grey">.</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" className="yellow">=</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
