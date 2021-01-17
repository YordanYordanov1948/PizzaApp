import React, { useState } from "react";
import BuildControl from "./components/BuildControl/BuildControl";
import Toolbar from "./components/Navigation/Toolbar";
import Option from "./components/Options/Options";
import Index from "./components/Pizza/Index";
import styled from 'styled-components';

function App()  { 
  const [peperoniCount , setPeperoniCount] =  useState(0);
  const [peperoniRemove , setPeperoniRemove] = useState(0);  
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

 const incrementPeperoni = () => {
  if (peperoniCount < 5) {
  setPeperoniCount((peperoniCount) => peperoniCount + 1)
  }
  }

  const decrementPeperoni = () => {
    if (peperoniRemove < 5) {
    setPeperoniRemove((peperoniRemove) => peperoniRemove - 1)
    }
    }

    const incrementOliveCount = () => {
      if (Olive < 5) { 
        setOliveCount((Olive) => Olive + 1)
      }
    }

    const RemoveOliveCount = () => {
      if (OliveRemove < 5) {
        setOliveRemove((OliveRemove) => OliveRemove - 1)
      }
    }

    const incrementMuschroomsCount = () => {
      if (Muschrooms < 5) { 
        setMuschroomsCount((Muschrooms) => Muschrooms + 1)
      }
    }

    const RemoveMuschroomsCount = () => {
      if (MuschroomsDelete < 5) {
        setMuschroomsDelete((MuschroomsDelete) => MuschroomsDelete - 1)
      }
    }

    const incrementCornCount = () => {
      if (Corn < 5) { 
        setCornCount((Corn) => Corn + 1) 
      }
    }

    const RemoveCornCount = () => {
      if (CornDelete < 5) {
        setCornDelete((CornDelete) => CornDelete - 1)
      }
    }

    const incrementPickledCount = () => {
      if (Pickled < 5) {
        setPickledCount((Pickled) => Pickled + 1)
      }
    }

    const RemovePickledCount = () => {
      if (PickledDelete < 5) {
      setPickledDelete((PickledDelete) => PickledDelete - 1) 
      }
    }

    const incrementTomatoesCount = () => {
      if (Tomatoes < 5) { 
        setTomatoesCount((Tomatoes) => Tomatoes + 1)
      }
    }

    const RemoveTomatoesCount = () => {
      if (TomatoesDelete < 5) {
        setTomatoesDelete((TomatoesDelete) => TomatoesDelete - 1)
      }
    }


   return(
     <Container> 
       <Index peperoniCount={peperoniCount}
              peperoniRemove={peperoniRemove}
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
          incrementPeperoni={incrementPeperoni}
          decrementPeperoni={decrementPeperoni}
          peperoniCount={peperoniCount}
          incrementOliveCount={incrementOliveCount}
          incrementMuschroomsCount={incrementMuschroomsCount}
          incrementCornCount={incrementCornCount}
          incrementPickledCount={incrementPickledCount}
          incrementTomatoesCount={incrementTomatoesCount}
          RemoveOliveCount={RemoveOliveCount}
          RemoveMuschroomsCount={RemoveMuschroomsCount}
          RemoveCornCount={RemoveCornCount}
          RemovePickledCount={RemovePickledCount}
          RemoveTomatoesCount={RemoveTomatoesCount}
      
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