import styled from 'styled-components';
import React  from 'react';


const Pica = (props) => {

  return( 
 <Pizza>
   <Crust> 
    <Cheese>
      {props.peperoniCount >= 1 &&  props.peperoniCount >= -1 && <Peperoni1/>}
      {props.peperoniCount >= 2 &&  props.peperoniCount >= -2 && <Peperoni2/>}
      {props.peperoniCount >= 3 &&  props.peperoniCount >= -3 && <Peperoni3/>}
      {props.peperoniCount >= 4 &&  props.peperoniCount >= -4 && <Peperoni4/>}
      {props.peperoniCount >= 5 &&  props.peperoniCount >= -5 && <Peperoni5/>}
      {props.oliveCount >= 1 && props.oliveCount >= -1 && <Olive/>}
      {props.oliveCount >= 2 && props.oliveCount >= -2 && <Olive1/>}
      {props.oliveCount >= 3 && props.oliveCount >= -3 && <Olive2/>}
      {props.mushroomCount >= 1 && props.mushroomCount >= -1 && <Muschrooms/>}
      {props.mushroomCount >= 2 && props.mushroomCount >= -2 && <Muschrooms1/>}
      {props.mushroomCount >= 3 && props.mushroomCount >= -3 && <Muschrooms2/>}
      {props.mushroomCount >= 4 && props.mushroomCount >= -4 && <Muschrooms3/>}
      {props.cornCount >= 1 && props.cornCount >= -1 && <Corn/>}
      {props.cornCount >= 2 && props.cornCount >= -2 && <Corn1/>}
      {props.cornCount >= 3 && props.cornCount >= -3 && <Corn2/>}
      {props.cornCount >= 4 && props.cornCount >= -4 && <Corn3/>}
      {props.pickledCount >= 1 && props.pickledCount >= - 1 && <Pickled1/>}
      {props.tomatoesCount >= 1 && props.tomatoesCount >= -1 && <Tomatoes/>}
      {props.tomatoesCount >= 2 && props.tomatoesCount >= - 2 && <Tomatoes1/>}
      {props.cheeseCount >= 1 && props.cheeseCount >= - 1 && <Cheesse/>}
      {props.cheeseCount >= 2 && props.cheeseCount >= - 2 && <Cheesse1/>}
      {props.cheeseCount >= 3 && props.cheeseCount >= - 3 && <Cheesse2/>}
      {props.cheeseCount >= 4 && props.cheeseCount >= - 4 && <Cheesse3/>}
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
padding: 65px;
box-sizing: border-box;

  @media (max-width: 600px) {
    width: 50vh;
    height 50vh;
    margin: 50px;
  }

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
margin-left: 200px;
height: 75px;
background: firebrick;
border-radius: 37.5px;

@media (max-width: 600px) {
  width: 30px;
  margin-left: 110px;
  height: 30px;
  background: firebrick;
 border-radius: 37.5px;
}

`;

const Peperoni2 = styled.div`
width: 75px;
margin-left: 120px;
height: 75px;
background: firebrick;
border-radius: 37.5px;

@media (max-width: 600px) {
  width: 30px;
  margin-left: 40px;
  height: 30px;
  background: firebrick;
 border-radius: 37.5px;
}

`;

const Peperoni3 = styled.div`
width: 75px;
margin-left: 150px;
height: 75px;
background: firebrick;
border-radius: 37.5px;

@media (max-width: 600px) {
  width: 30px;
  margin-left: 130px;
  height: 30px;
  background: firebrick;
  border-radius: 37.5px;
}
`;

const Peperoni4 = styled.div`
width: 75px;
margin-left: 260px;
height: 75px;
background: firebrick;
border-radius: 37.5px;

@media (max-width: 600px) {
  width: 30px;
  margin-left: 90px;
  height: 30px;
  background: firebrick;
  border-radius: 37.5px;
}

`;

const Peperoni5 = styled.div`
width: 75px;
margin-left: 130px;
height: 75px;
background: firebrick;
border-radius: 37.5px;

@media (max-width: 600px) {
  width: 30px;
  margin-left: 20px;
  height: 30px;
  background: firebrick;
  border-radius: 37.5px;
}

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


@media (max-width: 600px) {
width: 2%;
height: 3%;
left: 50%;
top: 15%;
border: 10px solid black;
border-radius: 30px;
transform: rotateZ(120deg);
}

`;



const Olive1 = styled.div`
width: 2%;
height: 3%;
border: 18px solid black;
border-radius: 50px;
position: absolute;
left: 37%;
top: 30%;
transform: rotateZ(310deg);

@media (max-width: 600px) {
width: 2%;
height: 3%;
left: 40%;
top: 50%;
border: 10px solid black;
border-radius: 30px;
transform: rotateZ(120deg);
  }

`;

const Olive2 = styled.div`
width: 2%;
height: 3%;
border: 18px solid black;
border-radius: 50px;
position: absolute;
left: 85%;
top: 30%;
transform: rotateZ(260deg);

@media (max-width: 600px) {
  width: 2%;
  height: 3%;
  left: 30%;
  top: 10%;
  border: 10px solid black;
  border-radius: 30px;
  transform: rotateZ(120deg);
    }

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

const Cheesse = styled.div`
position: absolute;
top: 90px;
left: 120px;
height: 100px;
width: 100px;
background-color: rgb(251, 190, 0);
border-radius: 10%;
z-index: 2;
border: 1px solid orange;


@media (max-width: 600px) {
  position: absolute;
  top: 80px;
  left: 30px;
  height: 30px;
  width: 30px;
  background-color: rgb(251, 190, 0);
  border-radius: 10%;
  z-index: 2;
  border: 1px solid orange;
`;

const Cheesse1 = styled.div`
position: absolute;
top: 230px;
left: 220px;
height: 100px;
width: 100px;
background-color: rgb(251, 190, 0);
border-radius: 10%;
z-index: 2;
border: 1px solid orange;

@media (max-width: 600px) {
  position: absolute;
  top: 10px;
  left: 40px;
  height: 30px;
  width: 30px;
  background-color: rgb(251, 190, 0);
  border-radius: 10%;
  z-index: 2;
  border: 1px solid orange;
`;

const Cheesse2 = styled.div`
position: absolute;
top: 100px;
left: 230px;
height: 100px;
width: 100px;
background-color: rgb(251, 190, 0);
border-radius: 10%;
z-index: 2;
border: 1px solid orange;

@media (max-width: 600px) {
  position: absolute;
  top: 40px;
  left: 90px;
  height: 30px;
  width: 30px;
  background-color: rgb(251, 190, 0);
  border-radius: 10%;
  z-index: 2;
  border: 1px solid orange;
`;

const Cheesse3 = styled.div`
position: absolute;
top: 190px;
left: 30px;
height: 100px;
width: 100px;
background-color: rgb(251, 190, 0);
border-radius: 10%;
z-index: 2;
border: 1px solid orange;

@media (max-width: 600px) {
  position: absolute;
  top: 80px;
  left: 90px;
  height: 30px;
  width: 30px;
  background-color: rgb(251, 190, 0);
  border-radius: 10%;
  z-index: 2;
  border: 1px solid orange;
`;