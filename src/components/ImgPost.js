import React from 'react';
import styled from 'styled-components';
import Img from '../img/image.png'
import { Grid, TextField, Button } from '@material-ui/core';
import { Card} from 'react-bootstrap'



const ImgPost = () => {
  return ( 
    <GridStyledbase>
      <Card style={{ width: '75%' }}>
        <Card.Title>Beker Day</Card.Title>
        <CardImg variant="top" src={Img}  />
        <Card.Body>
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            >
            <Grid item sx={12} md={7}>
              <TextField id="outlined-basic" label="Write your post message" style={{width: '100%'}} variant="outlined" />
            </Grid>
            <Grid item sx={12} md={4}>
              <StyledButton>
                <Button variant="contained" color="primary">
                  Edit Image
                </Button>
              </StyledButton>
            </Grid>
            </Grid>
        </Card.Body>
      </Card>
    </GridStyledbase>
   );
}

const StyledButton = styled.div`
  border: none;
  @media (max-width: 500px) {
    width: 160%;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 8%;
    ;
  }
`

const CardImg = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 2%;
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const GridStyledbase = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ImgPost;
