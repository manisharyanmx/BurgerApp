import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
];

const buildControls = (props) =>(

    <div className="BuildControls">
        <p style={{color:"white"}}>Current Price : <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
             <BuildControl 
             key={ctrl.label} 
             label={ctrl.label} 
             added = {() => props.ingredientAdded(ctrl.type) } 
             substracted = {() => props.ingredientSubstracted(ctrl.type)}
             disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}> ORDER NOW </button>
    </div>

);


export default buildControls;