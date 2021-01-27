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
  const [cheeseCount , setCheeseCount] = useState (0);

 const incrementPeperoniCount = () => {
  if (peperoniCount < 5) {
  setPeperoniCount((peperoniCount) => peperoniCount)
    } 
  }

  const decrementPeperoniCount = () => {
    if (peperoniCount <= 5) {
    setPeperoniCount((peperoniCount) => peperoniCount)
    } 
    }
  
    
     const incrementOliveCount = () => {
      if (oliveCount < 5) { 
        setOliveCount((oliveCount) => oliveCount)
      }
    }


    const decrementOliveCount = () => {
     if (oliveCount <= 5) {
        setOliveCount((oliveCount) => oliveCount)
      }
    }

    const incrementMuschroomsCount = () => {
      if (mushroomCount < 5) { 
        setMuschroomsCount((mushroomCount) => mushroomCount)
      }
    }

    const decrementMushroomCount = () => {
      if (mushroomCount <= 5) {
        setMuschroomsCount((mushroomCount) => mushroomCount)
      }
    }

    const incrementCornCount = () => {
      if (cornCount < 5) { 
        setCornCount((cornCount) => cornCount) 
      }
    }

    const decrementCornCount = () => {
      if (cornCount <= 5) {
        setCornCount((cornCount) => cornCount)
      }
    }

    const incrementPickledCount = () => {
      if (pickledCount < 5) {
        setPickledCount((pickledCount) => pickledCount)
      }
    }

    const decrementPickledCount = () => {
      if (pickledCount <= 5) {
      setPickledCount((pickledCount) => pickledCount) 
      }
    }

    const incrementTomatoesCount = () => {
      if (tomatoesCount < 5) { 
        setTomatoesCount((tomatoesCount) => tomatoesCount)
      }
    }

    const decrementTomatoesCount = () => {
      if (tomatoesCount <= 5) {
        setTomatoesCount((tomatoesCount) => tomatoesCount)
      }
    }

    const incrementCheeseCount = () => {
      if (cheeseCount < 4) {
        setCheeseCount((cheeseCount) => cheeseCount)
      }
    }
    
    const decrementCheeseCount = () => {
      if (cheeseCount <= 4) {
        setCheeseCount((cheeseCount) => cheeseCount)
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
              cheeseCount={cheeseCount}
              />
              
    <Option
          peperoniCount={peperoniCount}
          oliveCount={oliveCount}
          mushroomCount={mushroomCount}
          cornCount={cornCount}
          pickledCount={pickledCount}
          tomatoesCount={tomatoesCount}
          cheeseCount={cheeseCount}
          incrementPeperoniCount={() =>incrementPeperoniCount(peperoniCount, setPeperoniCount((peperoniCount) => peperoniCount + 1))}
          decrementPeperoniCount={() =>decrementPeperoniCount(peperoniCount, setPeperoniCount((peperoniCount) => peperoniCount - 1))}
          incrementOliveCount={() =>incrementOliveCount(oliveCount, setOliveCount((oliveCount) => oliveCount + 1))}
          decrementOliveCount={() => decrementOliveCount(oliveCount,setOliveCount((oliveCount) => oliveCount - 1 ))}
          incrementMuschroomsCount={() =>incrementMuschroomsCount(mushroomCount, setMuschroomsCount((mushroomCount) => mushroomCount + 1))}
          decrementMushroomCount={() =>decrementMushroomCount(mushroomCount, setMuschroomsCount((mushroomCount) => mushroomCount - 1))}
          incrementCornCount={() =>incrementCornCount(cornCount, setCornCount((cornCount) => cornCount + 1))}
          decrementCornCount={() =>decrementCornCount(cornCount, setCornCount((cornCount) => cornCount - 1))}
          incrementPickledCount={() =>incrementPickledCount(pickledCount, setPickledCount((pickledCount) => pickledCount + 1))}
          decrementPickledCount={() =>decrementPickledCount(pickledCount, setPickledCount((pickledCount) => pickledCount - 1))}
          incrementTomatoesCount={() =>incrementTomatoesCount(tomatoesCount, setTomatoesCount((tomatoesCount) => tomatoesCount + 1))}
          decrementTomatoesCount={() =>decrementTomatoesCount(tomatoesCount, setTomatoesCount((tomatoesCount) => tomatoesCount - 1))}
          incrementCheeseCount={() => incrementCheeseCount(cheeseCount , setCheeseCount((cheeseCount) => cheeseCount + 1))}
          decrementCheeseCount={() => decrementCheeseCount(cheeseCount , setCheeseCount((cheeseCount) => cheeseCount - 1))}  
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