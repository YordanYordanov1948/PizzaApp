import React from 'react';
import styled from 'styled-components';

function shoot() {
  alert("You made a order! See you soon! Thanks <3 ");
}


const BuildControl = (props) => (
<BuildC>
    <Button onClick={shoot}> 
    Order an  Pizza! Click!
    </Button>
  
     <Text>
      The best Italian Pizza 
      <br/>
      I have ever eaten
      <br/>
      Order for only 20$
    </Text>


</BuildC>

)

export default BuildControl;

const BuildC = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
background: #FFD700;
color: #fff;

@media (max-width: 600px) {
  color: #fff;
  background: #FFD700;
  width: 100vw;
  position: fixed;
  bottom: 0;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    
  color: #fff;
  background: #FFD700;
  width: 100%;
  position: fixed;
  bottom: 0;
  }
}
`;


const Button = styled.div`
background-color: #0080ff;
margin: 0 auto;
display: block;
cursor: pointer;
padding: 15px 32px;
cursor:pointer;


&:hover {
  opacity: 0.6;
  color: #ffff00;

}`;


const Text = styled.div`
font-size: 35px;
padding-top: 20px;
font-family: Brush Script MT, Brush Script Std, cursive;
color: black;
text-align:center;
`;




