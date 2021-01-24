import React from 'react'
import Hoc from '../hoc/Hoc';
import './Layout.css';
const layout=(props)=>(
    <Hoc>
    <div className="Layout-tool">Buid Your Own Burger</div>
    <main className="Layout">
        {props.children}
    </main>
    </Hoc>
);

export default layout;