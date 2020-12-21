import React  from 'react';
import AuxReact from '../Hoc/AuxReact';
import BuildControl from '../BuildControl/BuildControl';
import Toolbar from '../Navigation/Toolbar';


const PizzaBuilder = (props) => {
    return( 
    
            <AuxReact>
            <Toolbar/>
             <BuildControl/>
            </AuxReact>
    );
    }

export default PizzaBuilder;