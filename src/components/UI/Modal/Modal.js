import React from 'react';
import './Modal.css';
import Hoc from '../../hoc/Hoc';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Hoc>
        {/* <BackDrop show= {props.show} clicked={props.modalClosed}> */}
        <div 
        className="Modal"
        style={{
            transform : props.show ? 'translateY(0)':'translateY(-100vh)',
            opacity : props.show ? '1':'0'
        }}
        >
        {props.children}
        </div>
        {/* </BackDrop> */}
    </Hoc>
);

export default modal;