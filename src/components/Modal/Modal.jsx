import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

export default class Modal extends React.Component {
    constructor() {
        super()
        this.root = document.createElement('div')
        document.body.appendChild(this.root)
    }
    componentWillUnmount() {
        console.log(this.root)
        document.body.removeChild(this.root)
    }

    render() {
        return createPortal(
            <div className="modal">
                <button
                    className="blue-btn"
                    onClick={this.props.onClose}
                    className="modal__close-button">Close</button>
                {this.props.children}
            </div>,
            this.root
        );
    }
}