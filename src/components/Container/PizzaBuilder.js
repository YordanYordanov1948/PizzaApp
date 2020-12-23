import React, { useState } from "react";
import AuxReact from "../Hoc/AuxReact";
import BuildControl from "../BuildControl/BuildControl";
import Toolbar from "../Navigation/Toolbar";
import Option from "../Options/Options";

const PizzaBuilder = (props) => {
  const [peperoniCount, setPeperoniCount] = useState(0);
  return (
    <AuxReact>
      <Option
        incrementPeperoniCount={() =>
          setPeperoniCount((peperoniCount) => peperoniCount + 1)
        }
      />
      <Toolbar />
      <PizzaBuilder peperoniCount={peperoniCount} />
      <BuildControl />
    </AuxReact>
  );
};

export default PizzaBuilder;