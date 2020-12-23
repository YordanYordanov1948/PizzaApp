import styled from 'styled-components';
import React , { useState } from 'react';
import { Peperoni1 } from '../Pizza/Index';

function shoot() {
  alert("You made a order! See you soon! Thanks <3 ");

}

const Option = () => {

  const [Peperoni1,SetCount] = useState (0)
  const [number , DeleteCount] = useState(0)
 

  function AddCount() {
    SetCount(Peperoni1 + 1)
  }
 

  function Delete () {
    DeleteCount(prevCount => prevCount - 1)
    
  }


    return (
<Container>
<ButtonP onClick = {AddCount}>
  Add Peperoni +
  <span>{Peperoni1}</span>
</ButtonP>


<ButtonP2 onClick = {Delete}>
 Delete Peperoni 
 <span>{number}</span>
</ButtonP2>


<ButtonO>
Add Orenado 
</ButtonO>

<ButtonO2>
Delete Orenado
</ButtonO2>


<ButtonOl>
Add Olive
</ButtonOl>

<ButtonOl1>
Delete Olive
</ButtonOl1>

<BMu>
Add Muschrooms 
</BMu>


<BmuD>
    Delete Muschrooms
</BmuD>

<Corn>
    Add Corn
</Corn>

<CornD>
    Delete Corn
</CornD>

<Pickled>
  Add Pickled
</Pickled>

<PickledD>
  Delete Pickled
</PickledD>

<Tomatoes>
  Add Tomatoes
</Tomatoes>

<TomatoesD>
  Delete Tomatoes
</TomatoesD>


<Cancel onClick={shoot}>
  Cancel an order! Click!
</Cancel>

</Container>
    );
}

export default Option;



const Container = styled.div`
height: 450px;
position: relative;
border: 3px solid #ffff00; 
margin: 0;
position: absolute;
top: 50%;
-ms-transform: translateY(60%);
transform: translateY(-50%);
`;

const ButtonP = styled.div`
color: #fff;
background-color: #e60000;
cursor: pointer;
padding: 6px 22px;

&:hover {
  opacity: 0.6;
}`
;

const ButtonP2 = styled.div`
background-color: #0080ff;
cursor: pointer;
padding: 6px 22px;


&:hover {
  opacity: 0.6;
}`
;


const ButtonO = styled.div`
background-color: #ffffff;
cursor: pointer;
padding: 6px 22px;


&:hover {
    opacity: 0.6;
  }`
  ;


const ButtonO2 = styled.div`
color: #000000;
background-color: #12980e;
cursor: pointer;
padding: 6px 22px;


&:hover {
    opacity: 0.6;
  }`
  ;


const ButtonOl = styled.div`
color: white;
background-color: #DC143C;
cursor: pointer;
padding: 6px 22px;

&:hover {
    opacity: 0.6;

  }`
  ;

const ButtonOl1 = styled.div`
color: #fff;
background-color: #000000;
cursor: pointer;
padding: 6px 22px;

&:hover {
    opacity: 0.6;

  }`
;

const BMu = styled.div`
color: #fff;
background-color: #808080;
cursor: pointer;
padding: 6px 22px;

&:hover {
    opacity: 0.6;

  }`;


const BmuD = styled.div`
padding: 6px 22px;
background-color: #F0FFF0;
color: #F08080;
cursor: pointer;

&:hover {
  opacity: 0.6;

}

`;

const Corn = styled.div`
padding: 6px 22px;
background-color: #87CEFA;
cursor: pointer;
color: #800000;

&:hover {
  opacity: 0.6;

}

`;

const CornD = styled.div`
padding: 6px 22px;
background-color: #808000;
cursor: pointer;
color: #FFDAB9;

&:hover {
  opacity: 0.6;

}
`;

const Pickled = styled.div`
padding: 6px 22px;
background-color: #2E8B57;
cursor: pointer;
color: #FFDAB9;

&:hover {
  opacity: 0.6;

}
`;

const PickledD = styled.div`
padding: 6px 22px;
background-color: #FFFAFA;
cursor: pointer;
color: #FF6347;

&:hover {
  opacity: 0.6;

}
`;

const Tomatoes = styled.div`
padding: 6px 22px;
background-color: #FF6347;
cursor: pointer;
color: #fff;

&:hover {
  opacity: 0.6;

}
`;

const TomatoesD = styled.div`
padding: 6px 22px;
background-color: #00FF7F;
cursor: pointer;
color: #fff;

&:hover {
  opacity: 0.6;

}
`;

const Cancel = styled.div`
padding: 6px 22px;
background-color: #663399;
cursor: pointer;
color: #fff;

&:hover {
  opacity: 0.6;

}
`;