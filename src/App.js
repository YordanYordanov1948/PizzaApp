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


  const incrementPeperoni  = (key, value, callback) => {
    if (key <= value) callback();
  }

  const decrementPeperoni = (key , value , callback) => {
    if (key <= value) callback();
  }

  const incrementOlive = (key , value , callback) => {
    if(key <= value) callback();
  }
  const decrementOlive = (key , value , callback) => {
    if(key <= value) callback();
  }

  const incrementMuschrooms = (key , value , callback) => {
    if(key <= value) callback();
  }

  const decrementMushrooms = (key , value , callback) => {
    if(key <= value) callback();
  }

  const incrementCorn = (key , value , callback) => {
    if(key <= value) callback();
  }

  const decrementCorn = (key , value , callback) => {
    if(key <= value) callback();
  }

  const incrementPickled = (key , value , callback) => {
    if(key <= value) callback();
  }

  const decrementPickled = (key , value , callback) => {
    if(key <= value) callback();
  }

  const incrementTomatoes = (key , value , callback) => {
    if(key <= value) callback();
  }

  const decrementTomatoes = (key , value , callback) => {
    if(key <= value) callback();
  }

  const incrementCheese = (key , value , callback) => {
    if(key <= value) callback();
  }

  const decrementCheese = (key , value , callback) => {
    if(key <= value) callback();
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
          incrementPeperoni={() => incrementPeperoni(peperoniCount, 5, () => setPeperoniCount((peperoniCount) => peperoniCount +1))}
          decrementPeperoni={() => decrementPeperoni(peperoniCount, 5, () => setPeperoniCount((peperoniCount) => peperoniCount -1))}
          incrementOlive={() => incrementOlive(oliveCount, 5, () => setOliveCount((oliveCount) => oliveCount +1))}
          decrementOlive={() => decrementOlive(oliveCount, 5, () => setOliveCount((oliveCount) => oliveCount -1))} 
          incrementMuschrooms={() =>incrementMuschrooms(mushroomCount, setMuschroomsCount((mushroomCount) => mushroomCount + 1))}
          decrementMushrooms={() =>decrementMushrooms(mushroomCount, setMuschroomsCount((mushroomCount) => mushroomCount - 1))}
          incrementCorn={() =>incrementCorn(cornCount, setCornCount((cornCount) => cornCount + 1))}
          decrementCorn={() =>decrementCorn(cornCount, setCornCount((cornCount) => cornCount - 1))}
          incrementPickled={() =>incrementPickled(pickledCount, setPickledCount((pickledCount) => pickledCount + 1))}
          decrementPickled={() =>decrementPickled(pickledCount, setPickledCount((pickledCount) => pickledCount - 1))}
          incrementTomatoes={() =>incrementTomatoes(tomatoesCount, setTomatoesCount((tomatoesCount) => tomatoesCount + 1))}
          decrementTomatoes={() =>decrementTomatoes(tomatoesCount, setTomatoesCount((tomatoesCount) => tomatoesCount - 1))}
          incrementCheese={() => incrementCheese(cheeseCount , setCheeseCount((cheeseCount) => cheeseCount + 1))}
          decrementCheese={() => decrementCheese(cheeseCount , setCheeseCount((cheeseCount) => cheeseCount - 1))}  
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