import React from 'react';
import styled from 'styled-components';


const BuildControl = (props) => (
<BuildC>
    <Button> 
    Order a  Pizza
    </Button>

</BuildC>

)

export default BuildControl;

const BuildC = styled.div`
display: flex;
flex-direction: column;
flex: 1 0 auto; 
padding: 20px;
flex-shrink: 0;
padding: 20px;
background: #FFD700;
color: white;
`;


const Button = styled.div`
background-color: #0080ff;
margin: 0 auto;
display: block
cursor: pointer;
padding: 15px 32px;

&:hover {
    opacity: 0.7;

  }
`;

