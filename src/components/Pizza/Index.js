import styled from 'styled-components';
import React  from 'react';


const Pica = (props) => {

  return( 
 <Pizza>
   <Crust> 
    <Cheese>
      {props.peperoniCount >= 1 && <Peperoni1/>}
      <Peperoni2/> 
      <Peperoni2/> 
      <Peperoni3/>
      <Peperoni4/>
      <Peperoni5/>  
      <Orenado/>
      <Orenado1/>
      <Orenado2/>
      <Orenado3/>
      <Orenado4/>
      <Orenado5/>
      <Olive/>
      <Olive1/>
      <Olive2/>
      <Olive3/>
      <Muschrooms/>
      <Muschrooms1/>
      <Muschrooms2/>
      <Muschrooms3/>
      <Corn/>
      <Corn1/>
      <Corn2/>
      <Corn3/>
      <Pickled/>
      <Pickled1/>
      <Pickled2/>
      <Tomatoes/>
      <Tomatoes1/>
     </Cheese>
   </Crust>
 </Pizza>

  )
};


export default Pica ;

const Pizza = styled.div`
width: 100vh;
height: 100vh;
margin: auto;
padding: 5px;
box-sizing: border-box;
`;

const Crust = styled.div` 
margin: auto;
box-sizing: border-box;
position: relative;
background: #e6bf70;
width: 100%;
height: 100%;
max-width: 600px;
max-height: 600px;
border: 25px solid #e0b152;
border-radius: 500px;
display: flex;
`;


const Cheese = styled.div`
height: 95%;
width: 95%;
margin: auto;
border-radius: inherit;
background: #fff100;
`;


const Peperoni1 = styled.div`
width: 75px;
margin-left: 300px;
height: 75px;
height: 75px;
background: firebrick;
border-radius: 37.5px
`;

const Peperoni2 = styled.div`
width: 75px;
margin-left: 100px;
height: 75px;
background: firebrick;
border-radius: 37.5px
`;

const Peperoni3 = styled.div`
width: 75px;
margin-left: 150px;
height: 75px;
background: firebrick;
border-radius: 37.5px
`;


const Peperoni4 = styled.div`
width: 75px;
margin-left: 360px;
height: 75px;
background: firebrick;
border-radius: 37.5px
`;

const Peperoni5 = styled.div`
width: 75px;
margin-left: 160px;
height: 75px;
background: firebrick;
border-radius: 37.5px
`;


const Orenado = styled.div`
background: linear-gradient(green,#00d200);
position: absolute;
margin-left: 100px;
width: 8%;
height: 2%;
border-radius: 10px;
`;

const Orenado1 = styled.div`
background: linear-gradient(green,#00d200);
position: absolute;
left: 70%;
top: 45%;
transform: rotateZ(235deg);
width: 8%;
height: 2%;
border-radius: 10px;
`;

const Orenado2 = styled.div`
background: linear-gradient(green,#00d200);
position: absolute;
left: 75%;
top: 30%;
transform: rotateZ(160deg);
width: 8%;
height: 2%;
border-radius: 10px;
`;


const Orenado3 = styled.div`
background: linear-gradient(green,#00d200);
position: absolute;
width: 8%;
height: 2%;
border-radius: 10px;
left: 70%;
top: 50%;
transform: rotateZ(10deg);
`;


const Orenado4 = styled.div`
background: linear-gradient(green,#00d200);
position: absolute;
width: 8%;
height: 2%;
border-radius: 10px;
left: 45%;
top: 50%;
transform: rotateZ(30deg);
`;

const Orenado5 = styled.div`
background: linear-gradient(green,#00d200);
position: absolute;
width: 8%;
height: 2%;
border-radius: 10px;
left: 25%;
top: 30%;
transform: rotateZ(30deg);
`;


const Olive = styled.div`
width: 2%;
height: 3%;
border: 18px solid black;
border-radius: 50px;
position: absolute;
left: 55%;
top: 85%;
transform: rotateZ(120deg);
`;

const Olive1 = styled.div`
width: 2%;
height: 3%;
border: 18px solid black;
border-radius: 50px;
position: absolute;
left: 37%;
top: 30%;
transform: rotateZ(310deg)
`;

const Olive2 = styled.div`
width: 2%;
height: 3%;
border: 18px solid black;
border-radius: 50px;
position: absolute;
left: 85%;
top: 30%;
transform: rotateZ(260deg)
`;

const Olive3 = styled.div`
width: 2%;
height: 3%;
border: 18px solid black;
border-radius: 50px;
position: absolute;
left: 70%;
top: 50%;
transform: rotateZ(160deg);
`;

const Muschrooms = styled.div`
position: absolute;
width: 10%;
height: 11%;
border-radius: 12px;
background: #d6d6d6;
left: 15%;
top: 30%;
transform: rotateZ(105deg);
`;

const Muschrooms1 = styled.div`
position: absolute;
width: 10%;
height: 11%;
border-radius: 12px;
background: #d6d6d6;
left: 60%;
top: 30%;
transform: rotateZ(20deg);
`;


const Muschrooms2 = styled.div`
position: absolute;
width: 10%;
height: 11%;
border-radius: 12px;
background: #d6d6d6;
left: 40%;
top: 50%;
transform: rotateZ(110deg);
`;

const Muschrooms3 = styled.div`
position: absolute;
width: 10%;
height: 11%;
border-radius: 12px;
background: #d6d6d6;
left: 12%;
top: 50%;
transform: rotateZ(330deg);
`;

const Corn = styled.div`
position: absolute;
width: 5%;
height: 5%;
border-radius: 10px;
background: #FFD700;
left: 50%;
top: 55%;
transform: rotateZ(330deg);
`;


const Corn1 = styled.div`
position: absolute;
width: 5%;
height: 5%;
border-radius: 10px;
background: #FFD700;
left: 40%;
top: 10%;
transform: rotateZ(330deg);
`;

const Corn2 = styled.div`
position: absolute;
width: 5%;
height: 5%;
border-radius: 10px;
background: #FFD700;
left: 40%;
top: 20%;
transform: rotateZ(330deg);
`;

const Corn3 = styled.div`
position: absolute;
width: 5%;
height: 5%;
border-radius: 10px;
background: #FFD700;
left: 40%;
top: 50%;
`;

const Pickled = styled.div`
background: #006400;
border-radius: 40px;
position: absolute;
width: 10%;
height: 5%;
left: 60%;
top: 70%;
`;


const Pickled1 = styled.div`
background: #006400;
border-radius: 40px;
position: absolute;
width: 10%;
height: 5%;
left: 10%;
top: 70%;
transform: rotateZ(330deg);
`;

const Pickled2 = styled.div`
background: #006400;
border-radius: 40px;
position: absolute;
width: 10%;
height: 5%;
left: 40%;
top: 70%;
transform: rotateZ(300deg);
`;

const Tomatoes = styled.div`
background: #8B0000;
border-radius: 50px;
position: absolute;
width: 10%;
height: 5%;
left: 40%;
top: 70%;
transform: rotateZ(300deg);
`;


const Tomatoes1 = styled.div`
background: #8B0000;
border-radius: 90px;
position: absolute;
width: 10%;
height: 5%;
left: 89%;
top: 50%;
transform: rotateZ(300deg)
`;

