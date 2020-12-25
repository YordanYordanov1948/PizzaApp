import styled from 'styled-components';
import React  from 'react';



function shoot() {
  alert("You have successfully declined your order :(");

}

const Option = (props) => {

    return (
<Container>


<ButtonP onClick={() => props.incrementPeperoniCount()}>
  Add Peperoni
</ButtonP>



<ButtonO onClick={() => props.incrementOrenadoCount()}>
Add Orenado 
</ButtonO>


<ButtonOl onClick={() => props.incrementOliveCount()}>
Add Olive
</ButtonOl>


<BMu onClick={() => props.incrementMuschroomsCount()}>
Add Muschrooms 
</BMu>



<Corn onClick={() => props.incrementCornCount()}>
    Add Corn
</Corn>



<Pickled onClick={() => props.incrementPickledCount()}>
  Add Pickled
</Pickled>


<Tomatoes onClick={() => props.incrementTomatoesCount()}>
  Add Tomatoes
</Tomatoes>



<Cancel onClick={shoot}>
  Cancel an order! Click!
</Cancel>

</Container>
    );
}

export default Option;

const Container = styled.div`
height: 240px;
border: 3px solid #ffff00; 
margin: 0;
position: absolute;
top: 50%;
-ms-transform: translateY(60%);
transform: translateY(-50%);

@media (max-width: 600px) {
  height: 1px;
  display: block;
  padding-bottom: 700px;
  border: none;
  
}
`;

const ButtonP = styled.div`
color: #000;
background-color: #F8F8FF;
cursor: pointer;
padding: 6px 22px;


@media (max-width: 600px) {
color: #000;
background-color: #F8F8FF;
cursor: pointer;
padding: 6px 22px;
width: 50%;
}



&:hover {
  opacity: 0.6;
}
`;




const ButtonO = styled.div`
background-color: #ffffff;
cursor: pointer;
padding: 6px 22px;


@media (max-width: 600px) {
background-color: #ffffff;
cursor: pointer;
padding: 6px 22px;
width: 50%;
  }


&:hover {
    opacity: 0.6;
  }`
  ;


const ButtonOl = styled.div`
color: #000;
background-color: #F0FFF0;
cursor: pointer;
padding: 6px 22px;


@media (max-width: 600px) {
color: #000;
background-color: #F0FFF0;
cursor: pointer;
padding: 6px 22px;
width: 50%;
    }
  


&:hover {
    opacity: 0.6;

  }`
  ;


const BMu = styled.div`
color: #fff;
background-color: #D3D3D3;
cursor: pointer;
padding: 6px 22px;



@media (max-width: 600px) {
  color: #fff;
  background-color: #D3D3D3;
  cursor: pointer;
  padding: 6px 22px;
  width: 50%;
      }
    


&:hover {
    opacity: 0.6;

  }`;



const Corn = styled.div`
padding: 6px 22px;
background-color: #FFEFD5;
cursor: pointer;
color: #800000;


@media (max-width: 600px) {
 padding: 6px 22px;
background-color: #FFEFD5;
cursor: pointer;
color: #800000;
width: 50%;
 }
    
&:hover {
  opacity: 0.6;

}

`;


const Pickled = styled.div`
padding: 6px 22px;
background-color: #20B2AA;
cursor: pointer;
color: #FFDAB9;


@media (max-width: 600px) {
  padding: 6px 22px;
  background-color: #20B2AA;
  cursor: pointer;
  color: #FFDAB9;
  width: 50%;
  }



&:hover {
  opacity: 0.6;

}
`;



const Tomatoes = styled.div`
padding: 6px 22px;
background-color: #B0E0E6;
cursor: pointer;
color: #fff;


@media (max-width: 600px) {
  padding: 6px 22px;
  background-color: #B0E0E6;
  cursor: pointer;
  color: #fff;
  width: 50%;
  }

&:hover {
  opacity: 0.6;

}
`;



const Cancel = styled.div`
padding: 6px 22px;
background-color: #B0E0E6;
cursor: pointer;
color: #fff;



@media (max-width: 600px) {
  padding: 6px 22px;
  background-color: #B0E0E6;
  cursor: pointer;
  color: #fff;
  width: 80%;
  }

&:hover {
  opacity: 0.6;

}
`;