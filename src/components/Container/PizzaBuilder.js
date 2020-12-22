import React  from 'react';
import AuxReact from '../Hoc/AuxReact';
import BuildControl from '../BuildControl/BuildControl';
import Toolbar from '../Navigation/Toolbar';
import Option from '../Options/Options';


const PizzaBuilder = (props) => {
    return( 
    
            <AuxReact>
            <Option/>
            <Toolbar/>
             <BuildControl/>
            </AuxReact>
    );
    }


export default PizzaBuilder;
