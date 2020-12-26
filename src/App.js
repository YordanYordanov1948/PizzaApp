import React, { useState } from "react";
import BuildControl from "./components/BuildControl/BuildControl";
import Toolbar from "./components/Navigation/Toolbar";
import Option from "./components/Options/Options";
import Index from "./components/Pizza/Index";
import styled from 'styled-components';

function App()  { 
  const [peperoniCount , setPeperoniCount] =  useState(0);
  const [peperoniRemove , setPeperoniRemove] = useState(0);  
  const [Orenado , setOrenadoCount] = useState(0);
  const [OrenadoRemove , setOrenadoRemove] = useState(0);
  const [Olive , setOliveCount] = useState(0);
  const [OliveRemove, setOliveRemove] = useState (0);
  const [Muschrooms , setMuschroomsCount] = useState(0);
  const [MuschroomsDelete , setMuschroomsDelete] = useState(0);
  const [Corn , setCornCount] = useState (0);
  const [CornDelete , setCornDelete] = useState(0); 
  const [Pickled , setPickledCount] = useState (0);
  const [PickledDelete , setPickledDelete] = useState (0);
  const [Tomatoes, setTomatoesCount] = useState (0);
  const [TomatoesDelete , setTomatoesDelete] = useState(0);

   return(
     <Container> 
       <Index peperoniCount={peperoniCount}
              peperoniRemove={peperoniRemove}
              Orenado={Orenado}
              OrenadoRemove={OrenadoRemove}
              Olive={Olive}
              OliveRemove={OliveRemove}
              Muschrooms={Muschrooms}
              MuschroomsDelete={MuschroomsDelete}
              Corn={Corn}
              CornDelete={CornDelete}
              Pickled={Pickled}
              PickledDelete={PickledDelete}
              Tomatoes={Tomatoes}
              TomatoesDelete={TomatoesDelete} />
              
    <Option
        incrementPeperoniCount={() =>setPeperoniCount((peperoniCount) => peperoniCount + 1)}
          incrementOrenadoCount={() => setOrenadoCount((Orenado) => Orenado + 1)}
          incrementOliveCount={() => setOliveCount((Olive) => Olive + 1)}
          incrementMuschroomsCount={() => setMuschroomsCount((Muschrooms) => Muschrooms + 1)}
          incrementCornCount={() => setCornCount((Corn) => Corn + 1)}
          incrementPickledCount={() => setPickledCount((Pickled) => Pickled + 1)}
          incrementTomatoesCount={() => setTomatoesCount((Tomatoes) => Tomatoes + 1)}
          RemovePeperoniCount={() => setPeperoniRemove((peperoniRemove) => peperoniRemove -1)}
          RemoveOrenadoCount={() => setOrenadoRemove((OrenadoRemove) => OrenadoRemove -1)}
          RemoveOliveCount={() => setOliveRemove((OliveRemove) => OliveRemove -1)}
          RemoveMuschroomsCount={() =>setMuschroomsDelete((MuschroomsDelete) => MuschroomsDelete - 1)}
          RemoveCornCount={() => setCornDelete((CornDelete) => CornDelete -1)}
          RemovePickledCount={() => setPickledDelete((PickledDelete) => PickledDelete - 1)}
          RemoveTomatoesCount={() => setTomatoesDelete((TomatoesDelete) => TomatoesDelete -1)}
          />
         <Toolbar/>
      <BuildControl/>
     </Container>
    
   );
  }


export default App;

const Container = styled.div`
background: #F0E68C;
`;