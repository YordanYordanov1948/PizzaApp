import React  from 'react';
import AuxReact from '../Hoc/AuxReact';
import BuildControl from '../BuildControl/BuildControl';


const PizzaBuilder = (props) => {
    return( 
    
            <AuxReact>
             <BuildControl/>
            </AuxReact>
    );
    }

export default PizzaBuilder;