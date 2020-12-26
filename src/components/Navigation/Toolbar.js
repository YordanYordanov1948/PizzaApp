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

  <Button onClick= {() => setModalIsOpen(!modalIsOpen)}>
    Contact us
  </Button>

  <Modal isOpen= {modalIsOpen}>
      <Button2  onClick = {() => setModalIsOpen(false)} >Close Me</Button2>
      <Text>What's on your mind?
        <br/>
        You didn't like our pizza, huh? :( 
        </Text>
     
      <input type="text" placeholder="Name" />
      <br/>
      <input type="text" placeholder="Email" />
      <br/>
      <input type="text" placeholder="Number" />

      <Button3 onClick = {() => setModalIsOpen(false)}
       type="submit" class="signupbtn">Send</Button3>

      </Modal>
</Li>
</Menu>
    );
}

export default Toolbar;


const Menu = styled.div`
background-color: #333;
position: fixed; 
top:0;
left:0;
right:0;
padding: 1px;  
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
background: #000000;
color: #fff;
padding: 5px 10px;
font-size: 1.3rem;

&:hover {
  opacity: 0.7;

}
`;

const Text = styled.div`
margin: 0 0 20px 0;
font-size: 15px;
text-align: center;
 color: #55311c;
`;



const Button3 = styled.div`
border: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: lightgreen;
color: #fff;
padding: 10px 20px;
border-radius: 10px;
font-size: 21px;

&:hover {
  opacity: 0.7;

}`;
