import React  from 'react';
import styled from 'styled-components';


const Option  = (props) => {
    return (
<Container>
<ButtonP>
Add Peperoni
</ButtonP>



<ButtonP2>
 Delete Peperoni
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

<C>
    Add 
</C>

<CD>
    Delete
</CD>


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
padding: 10px 22px;

&:hover {
  opacity: 0.6;
}`
;

const ButtonP2 = styled.div`
background-color: #0080ff;
cursor: pointer;
padding: 10px 22px;


&:hover {
  opacity: 0.6;
}`
;


const ButtonO = styled.div`
background-color: #ffffff;
cursor: pointer;
padding: 10px 22px;


&:hover {
    opacity: 0.6;
  }`
  ;


const ButtonO2 = styled.div`
color: #000000;
background-color: #12980e;
cursor: pointer;
padding: 10px 22px;


&:hover {
    opacity: 0.6;
  }`
  ;


const ButtonOl = styled.div`
color: white;
background-color: #DC143C;
cursor: pointer;
padding: 10px 22px;

&:hover {
    opacity: 0.6;

  }`
  ;

const ButtonOl1 = styled.div`
color: #fff;
background-color: #000000;
cursor: pointer;
padding: 10px 22px;

&:hover {
    opacity: 0.6;

  }`
;

const BMu = styled.div`
color: #fff;
background-color: red;
cursor: pointer;
padding: 10px 22px;

&:hover {
    opacity: 0.6;

  }`;


const BmuD = styled.div`
padding: 10px 22px;
background-color: yellow;
`;

const C = styled.div`
padding: 10px 22px;
background-color: green;
`;

const CD = styled.div`
padding: 10px 22px;
background-color: blue;
`