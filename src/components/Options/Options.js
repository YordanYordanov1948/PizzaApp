import React from 'react';
import styled from 'styled-components';

function shoot() {
  alert("You have successfully declined your order :(");
}

const Option = (props) => {

    return (
<Container>


<ButtonP onClick={() => props.incrementPeperoniCount() && props.setIsHide() < 5 }>
  Add Peperoni
</ButtonP>

<ButtonD onClick={() => props.RemovePeperoniCount()}> 
  Delete Peperoni
</ButtonD>

<ButtonO onClick={() => props.incrementOrenadoCount()}>
Add Orenado 
</ButtonO>

<ButtonOD onClick={() => props.RemoveOrenadoCount()}>
  Remove Orenado
</ButtonOD>

<ButtonOl onClick={() => props.incrementOliveCount()}>
Add Olive
</ButtonOl>

<ButtonOlD onClick={() => props.RemoveOliveCount()}>
  Remove Olive
</ButtonOlD>

<BMu onClick={() => props.incrementMuschroomsCount()}>
Add Muschrooms 
</BMu>

<BMuD onClick={() => props.RemoveMuschroomsCount()}>
  Remove Muschrooms
</BMuD>

<Corn onClick={() => props.incrementCornCount()}>
    Add Corn
</Corn>

<CornDelete onClick={() => props.RemoveCornCount()}>
    Delete Corn
</CornDelete>

<Pickled onClick={() => props.incrementPickledCount()}>
  Add Pickled
</Pickled>

<Pickled onClick={() => props.RemovePickledCount()}>
  Remove Pickled
</Pickled>

<Tomatoes onClick={() => props.incrementTomatoesCount()}>
  Add Tomatoes
</Tomatoes>

<Tomatoes onClick={() => props.RemoveTomatoesCount()}>
  Remove Tomatoes
</Tomatoes>

<Cancel onClick={shoot}>
  Cancel an order! Click!
</Cancel>

</Container>
    );
}

export default Option;

const Container = styled.div`
height: 440px;
margin: 0;
position: absolute;
top: 50%;
-ms-transform: translateY(60%);
transform: translateY(-50%);

@media (max-width: 600px) {
display: none;
}
`;

const ButtonP = styled.div`
color: #000;
background-color: #F8F8FF;
cursor: pointer;
padding: 6px 22px;

&:hover {
  opacity: 0.6;
}
`;


const ButtonD = styled.div`
color: #000;
background-color: #F8F8FF;
cursor: pointer;
padding: 6px 22px;

&:hover {
  opacity: 0.6;
}
`;




const ButtonO = styled.div`
background-color: #ffffff;
cursor: pointer;
padding: 6px 22px;

&:hover {
    opacity: 0.6;
  }`
  ;

const ButtonOD = styled.div`
background-color: #ffffff;
cursor: pointer;
padding: 6px 22px;


&:hover {
    opacity: 0.6;
  }
`;




const ButtonOl = styled.div`
color: #000;
background-color: #F0FFF0;
cursor: pointer;
padding: 6px 22px;

&:hover {
    opacity: 0.6;

  }`
  ;


const ButtonOlD = styled.div`

color: #000;
background-color: #F0FFF0;
cursor: pointer;
padding: 6px 22px;

&:hover {
    opacity: 0.6;

  }`
  ;



const BMu = styled.div`
color: #fff;
background-color: #D3D3D3;
cursor: pointer;
padding: 6px 22px;


&:hover {
    opacity: 0.6;

  }`;


const BMuD = styled.div`
color: #fff;
background-color: #D3D3D3;
cursor: pointer;
padding: 6px 22px;

    
&:hover {
    opacity: 0.6;

  }`;



const Corn = styled.div`
padding: 6px 22px;
background-color: #FFEFD5;
cursor: pointer;
color: #800000;

    
&:hover {
  opacity: 0.6;

}
`;


const CornDelete = styled.div`
padding: 6px 22px;
background-color: #FFEFD5;
cursor: pointer;
color: #800000;
  
&:hover {
  opacity: 0.6;

}
`;


const Pickled = styled.div`
padding: 6px 22px;
background-color: #20B2AA;
cursor: pointer;
color: #FFDAB9;

&:hover {
  opacity: 0.6;

}
`;



const Tomatoes = styled.div`
padding: 6px 22px;
background-color: #B0E0E6;
cursor: pointer;
color: #fff;

&:hover {
  opacity: 0.6;

}
`;



const Cancel = styled.div`
padding: 6px 22px;
background-color: #B0E0E6;
cursor: pointer;
color: #fff;


&:hover {
  opacity: 0.6;

}
`;