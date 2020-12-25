import React, { useState } from "react";
import BuildControl from "./components/BuildControl/BuildControl";
import Toolbar from "./components/Navigation/Toolbar";
import Option from "./components/Options/Options";
import Index from "./components/Pizza/Index";
import styled from 'styled-components';

function App()  { 
  const [peperoniCount , setPeperoniCount] =  useState(0);
  const [Orenado , setOrenadoCount] = useState(0);
  const [Olive , setOliveCount] = useState(0);
  const [Muschrooms , setMuschroomsCount] = useState(0);
  const [Corn , setCornCount] = useState (0);
  const [Pickled , setPickledCount] = useState (0);
  const [Tomatoes, setTomatoesCount] = useState (0);

   return(
     <Container> 
       <Index peperoniCount={peperoniCount}
              Orenado={Orenado}
              Olive={Olive}
              Muschrooms={Muschrooms}
              Corn={Corn}
              Pickled={Pickled}
              Tomatoes ={Tomatoes}/>
    <Option
        incrementPeperoniCount={() =>setPeperoniCount((peperoniCount) => peperoniCount + 1)}
          incrementOrenadoCount={() => setOrenadoCount((Orenado) => Orenado + 1)}
          incrementOliveCount={() => setOliveCount((Olive) => Olive + 1)}
          incrementMuschroomsCount={() => setMuschroomsCount((Muschrooms) => Muschrooms + 1)}
          incrementCornCount={() => setCornCount((Corn) => Corn + 1)}
          incrementPickledCount={() => setPickledCount((Pickled) => Pickled + 1)}
          incrementTomatoesCount={() => setTomatoesCount((Tomatoes) => Tomatoes + 1)}

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