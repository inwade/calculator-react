import React from 'react';

import './Button.css';

class Button extends React.Component {
    render () {
        return (
        <div className={this.props.classes} id={this.props.id} onClick={this.props.handler}>
            <p>{this.props.symbol}</p>
        </div>
         )
    }
}

export default Button;