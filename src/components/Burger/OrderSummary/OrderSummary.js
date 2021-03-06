import React from 'react';

import Hoc from '../../hoc/Hoc';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
    return <li key={igKey}> <span style= {{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    return (
        <Hoc>
            <h3>Your Order </h3>
            <p>A Delicious Burger with following ingredients is ready :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <button onClick = {props.cancel} >Cancel</button>
            <button onClick = {props.proceed} >Proceed</button>
        </Hoc>
    );
    


}

export default orderSummary;