import React from 'react';

import './Input.css';

class Input extends React.Component {

    render() {
        return (
            <div className="input" onClick={this.props.handler}>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default Input;