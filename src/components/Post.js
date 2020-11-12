import React from 'react';
import styled from 'styled-components';

const Post = () => {
  return (
    <StyledPost>
      <StyledH1>Post Management</StyledH1>
      <StyledSpan>Select the social media on which you want to publish</StyledSpan>
      <StyledSection>
        <StyledDiv>
          <StyledInput
            type="checkbox"
            id="facebook"
          />
          <i class="fab fa-facebook-square icono face"></i>
          <StyledLabel for="facebook">Publish on Facebook</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput
            type="checkbox"
            id="insta"
          />
          <i class="fab fa-instagram icono insta"></i>
          <StyledLabel for="insta">Publish on Facebook</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput
            type="checkbox"
            id="twitter"
          />
            <i class="fab fa-twitter icono twitter"></i> 
          <StyledLabel for="twitter">Publish on Facebook</StyledLabel>
        </StyledDiv>
      </StyledSection>
    </StyledPost>
   );
}

const StyledLabel = styled.label`
  margin: 2%;
`

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 2%;
`

const StyledSection = styled.div`
  margin: 5%;
`
const StyledDiv = styled.div`
  border-radius: 3%;
  border: 1px solid rgba(0,0,0,.5);
  padding: 1%;
  display: flex;
  margin: 3%;
`

const StyledSpan = styled.span`
  margin: 5%;
  padding: .2%;
  font-size: 1rem;
`
const StyledPost = styled.div`
  border-radius: 2%;
  @media(max-width: 960px){
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  } 
`

const StyledH1 = styled.h1`
  /* margin: 5% 0 1% 5%; */
  /* padding: 6%; */
  border-left: 5px solid green;
  font-size: 2rem;
`
 
export default Post;
