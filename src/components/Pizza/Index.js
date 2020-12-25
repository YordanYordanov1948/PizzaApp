import styled from 'styled-components';
import React  from 'react';


const Pica = (props) => {

  return( 
 <Pizza>
   <Crust> 
    <Cheese>
      {props.peperoniCount >= 1 && <Peperoni1/>}
      {props.peperoniCount >= 2 && <Peperoni2/>}
      {props.peperoniCount >= 3 && <Peperoni3/>}
      {props.peperoniCount >= 4 && <Peperoni4/>}
      {props.peperoniCount >= 5 && <Peperoni5/>}
      {props.Orenado >= 1 && <Orenado/>}
      {props.Orenado >= 2 && <Orenado1/>}
      {props.Orenado >= 3 && <Orenado2/>}
      {props.Orenado >= 4 && <Orenado3/>}
      {props.Orenado >= 5 && <Orenado4/>}
      {props.Olive >= 1 && <Olive/>}
      {props.Olive >= 2 && <Olive1/>}
      {props.Olive >= 3 && <Olive2/>}
      {props.Olive >= 4 && <Olive2/>}
      {props.Muschrooms >= 1 && <Muschrooms/>}
      {props.Muschrooms >= 2 && <Muschrooms1/>}
      {props.Muschrooms >= 3 && <Muschrooms2/>}
      {props.Muschrooms >= 4 && <Muschrooms3/>}
      {props.Corn >= 1 && <Corn/>}
      {props.Corn >= 2 && <Corn1/>}
      {props.Corn >= 3 && <Corn2/>}
      {props.Corn >= 4 && <Corn3/>}
      {props.Pickled >= 1 && <Pickled1/>}
      {props.Tomatoes >= 1 && <Tomatoes/>}
      {props.Tomatoes >= 2 && <Tomatoes1/>}
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
margin-left: 200px;
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

