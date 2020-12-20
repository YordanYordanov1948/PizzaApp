import React  from 'react'; 
import Layout from './components/Layout';
import PizzaBuilder from './components/Container/PizzaBuilder';
import Pizza from './components/Pizza/Pizza';
import styled from 'styled-components';

function App()  { 
   return(
     <Container> 
   <Layout> 
    <Pizza/>
    <PizzaBuilder/>
    </Layout>

     </Container>
    
   
   );
  }



export default App;

const Container = styled.div`
background: #F0E68C;
`