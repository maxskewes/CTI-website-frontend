import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountrySelect from '../components/CountrySelect';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import HelpIcon from '@material-ui/icons/Help';

function AddOrganization() {
  return (
    <Container className='containerWorld card245'>
      <Typography variant='h1'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>Add Organization to the Civic Tech Index</h3>
          </Grid>
          <Grid item xs={12}>
            <h5>Organization Detail</h5>
            <label>
              Organization Name:*
              <TextField id="filled-basic"></TextField>
            </label>
            <label>
              Parent Organization:
              <TextField id="filled-basic"></TextField>
            </label>
          </Grid>
          <Grid item xs={12}>
            <h5>Project URL</h5>
            <label>
              Website URL:*
              <TextField id="filled-basic"></TextField>
            </label>
            <label>
              Github URL:*
              <TextField id="filled-basic"></TextField>
            </label>
          </Grid>
          <Grid item xs={12}>
            <h5>Social Media URL</h5>
            <label>
              Facebook URL:
              <TextField id="filled-basic"></TextField>
            </label>
            <label>
              Twitter URL:
              <TextField id="filled-basic"></TextField>
            </label>
            <label>
              MeetUp URL:
              <TextField id="filled-basic"></TextField>
            </label>
          </Grid>
          <Grid item xs={12}>
            <h5>Location</h5>
            <Grid container spacing={3}>
              <Grid item xs>
                <label>
                  City
                  <TextField id="filled-basic"></TextField>
                </label>
              </Grid>
              <Grid item xs>
                <label>
                  State/Prov/Co
                  <TextField id="filled-basic"></TextField>
                </label>
              </Grid>
              <Grid item xs={6}>
                <label>
                Country:
                  <CountrySelect></CountrySelect>
                </label>
              </Grid>
            </Grid>
          </Grid>    
          <Grid item xs={12}>
            <h5>Github Tags</h5>
            <TextField 
              id="filled-basic"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <HelpIcon/>
                  </InputAdornment>
                )
              }}
              >
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <h5>Organization Email</h5>
            <TextField id="filled-basic"></TextField>
          </Grid>
            <Grid container justify="center" alignItems="center" style={{ height: "100px" }}>
              <Grid item xs={3} style={{ textAlign: "center" }}>
                <Button variant="contained" color="default">
                Cancel
                </Button>
              </Grid>
              <Grid item xs={3} style={{ textAlign: "center" }}>
                <Button variant="contained" color="secondary">
                Save
                </Button>
              </Grid>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  )
}

export default AddOrganization;
