import styled  from 'styled-components';
import React , { useState } from 'react';

const  Toolbar = () => {

const [modalIsOpen , setModalIsOpen] = useState(false)

 return (
<Menu>
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

  <Button onClick = {() => setModalIsOpen(!modalIsOpen)}>
    Open
    <Modal isOpen = {modalIsOpen}>
      <Button2  onClick = {() => setModalIsOpen(false)} >Close Me</Button2>
      <Name>
        Name:
      <input type="text" name="name" />
      </Name>
      <br/>
      Telephone:
      <input type="text" name="name" />

      </Modal>
  </Button>

</Li>
</Menu>
    );
}

export default Toolbar;


const Menu = styled.div`
background-color: #333;
position: fixed; 
top: 0;
left:0;
right:0;
padding-bottom: 10px;
font-family:"Dosis", sans-serif; 
`;

const Li = styled.div`
cursor:pointer;
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

const Modal = styled.div`
display: ${(props) => (props.isOpen ? 'block' : 'none')};
width: 600px;
max-width: 100%;
height: 400px;
max-height: 100%;
position: fixed;
z-index: 100;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: #fff

`;


const Button = styled.div`
display:flex;
text-decoration:none;
color:#FFFF00;
padding: 1rem;

&:hover {
    opacity: 0.7;

  }
`;


const Button2 = styled.div`
position: absolute;
z-index: 1;
top: 10px;
right: 20px;
border: 0;
background: 
black;color: white;
padding: 5px 10px;
font-size: 1.3rem;
`;

const Name = styled.div`
margin: 0 0 20px 0;
color: red;
`;

const Input = styled.div``