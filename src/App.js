import React  from 'react'; 
import Layout from './components/Layout';
import PizzaBuilder from './components/Container/PizzaBuilder';
import Index from './components/Pizza/Index';
import styled from 'styled-components';

function App()  { 
   return(
     <Container> 
   <Layout> 
    <Index/>
    <PizzaBuilder/>
    </Layout>

     </Container>
    
   
   );
  }



export default App;

const Container = styled.div`
background-color: #F0E68C;
left:0;
right:0;
top: 0;
width: 100%;
`;