import React from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components'

import Post from './Post' 
import ImgPost from './ImgPost' 
import PiePost from './PiePost' 

 const SimpleContainer  = ()  => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <DivStyled component="DivStyled">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Post></Post>
            </Grid>
            <Grid item xs={12} md={6}>
              <ImgPost></ImgPost>
            </Grid>
            <Grid item xs={12}>
              <PiePost></PiePost>
            </Grid>
          </Grid>
        </DivStyled>
      </Container>
    </React.Fragment>
  );
}

const DivStyled = styled.div`
  height: auto;
  box-shadow: 3px 5px 8px rgba(0,0,0,.7);
  border-radius: 2%;
`

export default SimpleContainer;