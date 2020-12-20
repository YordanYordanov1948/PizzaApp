
import React from 'react';
import styled from 'styled-components';

const Pica = (props) => {
    return( 
 <Pizza>
     <Crust/>
     <Cheese>
     <Peperoni/>
     <Peperoni1/>
     <Peperoni2/>
     <Peperoni3/>
     <Peperoni4/>
     </Cheese>
     
  
    
     
 </Pizza>
    )
};

export default Pica ;

const Pizza = styled.div`
top: 50px;
left: 450px;
width: 100%;
overflow: hidden;
position: relative;
`;

const Crust = styled.div` 
width: 500px;
  height: 500px;
  background: burlywood;
  border-radius: 250px;
  -webkit-border-radius: 250px;
  -moz-border-radius: 250px;
`;


const Cheese = styled.div`
width: 400px;
height: 400px;
background: gold;
border-radius: 200px;
position: relative;
top: -450px;
left: 50px;
`;

const Peperoni = styled.div`
width: 75px;
margin-left: 150px;
height: 75px;
background: firebrick;
border-radius: 37.5px;
`;

const Peperoni1 = styled.div`
width: 75px;
margin-left: 250px;
height: 75px;
background: firebrick;
border-radius: 37.5px;
`;

const Peperoni2 = styled.div`
width: 75px;
margin-left: 120px;
height: 75px;
background: firebrick;
border-radius: 37.5px;
`;

const Peperoni3 = styled.div`
width: 75px;
margin-left: 100px;
height: 75px;
background: firebrick;
border-radius: 37.5px;
`;

const Peperoni4 = styled.div`
width: 75px;
margin-left: 200px;
height: 75px;
background: firebrick;
border-radius: 37.5px;
`;