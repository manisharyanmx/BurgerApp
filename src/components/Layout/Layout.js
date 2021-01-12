import React from 'react'
import Aux from '../../hoc/Aux'
import './Layout.css';
const layout=(props)=>(
    <Aux>
    <div className="Layout-tool">Buid Your Own Burger</div>
    <main className="Layout">
        {props.children}
    </main>
    </Aux>
);

export default layout;