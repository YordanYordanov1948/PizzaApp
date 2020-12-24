import React, { useState } from "react";
import AuxReact from "../Hoc/AuxReact";
import BuildControl from "../BuildControl/BuildControl";
import Toolbar from "../Navigation/Toolbar";
import Option from "../Options/Options";
import Index from "../Pizza/Index";

const PizzaBuilder = () => {
  const [peperoniCount, setPeperoniCount] = useState(0);

  return (
  <AuxReact>
    <Option
        incrementPeperoniCount={() =>
          setPeperoniCount((peperoniCount) => peperoniCount + 1)
        }
      />
      <Toolbar/>
      <Index peperoniCount={peperoniCount}/>
      <BuildControl/>
      <PizzaBuilder/>
  </AuxReact>
      
  );
};

export default PizzaBuilder;
