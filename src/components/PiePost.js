import React from 'react';
import styled from 'styled-components';
import { Grid, Button } from '@material-ui/core';


const PiePost = () => {
  return ( 
    <StyledPie>
      <Grid
       container
       direction="row"
       justify="space-between"
       alignItems="center"
      >
         <Grid item sx={12}>
         <Button variant="contained" color="default">
          Cancel Post
        </Button>
        </Grid>
         <Grid item sx={12}>
         <Button variant="contained" color="primary">
          Preview post beffore publish
        </Button>
        </Grid>
      </Grid>
    </StyledPie>
   );
}

const StyledPie = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  @media (max-width: 500px) {
    height: 20vh;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 8%;
    ;
  }
`

export default PiePost;