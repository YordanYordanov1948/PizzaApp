import React, { useState } from "react";
import BuildControl from "./components/BuildControl/BuildControl";
import Toolbar from "./components/Navigation/Toolbar";
import Option from "./components/Options/Options";
import Index from "./components/Pizza/Index";
import styled from 'styled-components';

function App()  { 
  const [peperoniCount , setPeperoniCount] =  useState(0);
  const [Orenado , setOrenadoCount] = useState(0);
   return(
     <Container> 
       <Index peperoniCount={peperoniCount}
              Orenado = {Orenado}/>
    <Option
        incrementPeperoniCount={() =>
          setPeperoniCount((peperoniCount) => peperoniCount + 1)}
          incrementOrenadoCount={() => setOrenadoCount((Orenado) => Orenado + 1)}
          />

         <Toolbar/>
      <BuildControl/>
     </Container>
    
   );
  }


export default App;

const Container = styled.div`
background-color: #F0E68C;
`;