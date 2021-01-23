import React, { useState } from "react";
import BuildControl from "./components/BuildControl/BuildControl";
import Toolbar from "./components/Navigation/Toolbar";
import Option from "./components/Options/Options";
import Index from "./components/Pizza/Index";
import styled from 'styled-components';

function App()  { 
  const [peperoniCount , setPeperoniCount] = useState(0);
  const [oliveCount , setOliveCount] = useState(0);
  const [mushroomCount , setMuschroomsCount] = useState(0);
  const [cornCount , setCornCount] = useState (0);
  const [pickledCount , setPickledCount] = useState (0);
  const [tomatoesCount , setTomatoesCount] = useState (0);

 const incrementPeperoni = () => {
  if (peperoniCount < 5) {
  setPeperoniCount((peperoniCount) => peperoniCount + 1)
    } 
  }


  const decrementPeperoni = () => {
    if (peperoniCount <= 5) {
    setPeperoniCount((peperoniCount) => peperoniCount - 1)
    } 
    }
  

    const incrementOliveCount = () => {
      if (oliveCount < 5) { 
        setOliveCount((oliveCount) => oliveCount + 1)
      }
    }

    const decrementOliveCount = () => {
      if (oliveCount <= 5) {
        setOliveCount((oliveCount) => oliveCount - 1)
      }
    }

    const incrementMuschroomsCount = () => {
      if (mushroomCount < 5) { 
        setMuschroomsCount((mushroomCount) => mushroomCount + 1)
      }
    }

    const decrementMushroomCount = () => {
      if (mushroomCount <= 5) {
        setMuschroomsCount((mushroomCount) => mushroomCount - 1)
      }
    }

    const incrementCornCount = () => {
      if (cornCount < 5) { 
        setCornCount((cornCount) => cornCount + 1) 
      }
    }

    const decrementCornCount = () => {
      if (cornCount <= 5) {
        setCornCount((cornCount) => cornCount - 1)
      }
    }

    const incrementPickledCount = () => {
      if (pickledCount < 5) {
        setPickledCount((pickledCount) => pickledCount + 1)
      }
    }

    const decrementPickledCount = () => {
      if (pickledCount <= 5) {
      setPickledCount((pickledCount) => pickledCount - 1) 
      }
    }

    const incrementTomatoesCount = () => {
      if (tomatoesCount < 5) { 
        setTomatoesCount((tomatoesCount) => tomatoesCount + 1)
      }
    }

    const decrementTomatoesCount = () => {
      if (tomatoesCount <= 5) {
        setTomatoesCount((tomatoesCount) => tomatoesCount - 1)
      }
    }


   return(
     <Container> 
       <Index peperoniCount={peperoniCount}
              oliveCount={oliveCount}              
              mushroomCount={mushroomCount}
              cornCount={cornCount}
              pickledCount={pickledCount}
              tomatoesCount={tomatoesCount}
              />
              
    <Option
          peperoniCount={peperoniCount}
          incrementPeperoni={incrementPeperoni}
          decrementPeperoni={decrementPeperoni}
          incrementOliveCount={incrementOliveCount}
          decrementOliveCount={decrementOliveCount}
          incrementMuschroomsCount={incrementMuschroomsCount}
          decrementMushroomCount={decrementMushroomCount}
          incrementCornCount={incrementCornCount}
          decrementCornCount={decrementCornCount}
          incrementPickledCount={incrementPickledCount}
          decrementPickledCount={decrementPickledCount}
          incrementTomatoesCount={incrementTomatoesCount}
          decrementTomatoesCount={decrementTomatoesCount}
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