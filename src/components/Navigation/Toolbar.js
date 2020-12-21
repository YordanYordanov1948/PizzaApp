import React from 'react';
import styled from 'styled-components';

const toolbar = (props) => {
    return (
<Toolbar>
<Li>
    <Anchor>
      Home
    </Anchor>

    <Anchor>
      About
    </Anchor>

    <Anchor>
      Pricing
    </Anchor>

    <Anchor>
     Menu
    </Anchor>

    <Anchor>
     Contact us
    </Anchor> 
</Li>
</Toolbar>
    );
}

export default toolbar;


const Toolbar = styled.div`
background-color: #333;
position: fixed; 
top: 0;
width: 100%;
font-family:"Dosis", sans-serif; 
`;

const Li = styled.div`
display:flex;
justify-content: center;
text-decoration:none;
text-transform:uppercase;
`;

const Anchor = styled.a`
display:flex;
text-decoration:none;
color:#FFFF00;
padding:1rem;

&:hover {
    opacity: 0.7;

  }
  `;


