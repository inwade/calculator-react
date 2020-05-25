import React from 'react';

import './ClearButton.css';

function ClearButton (props) {
    return (
        <div className="clear-button" onClick={props.handler}>
            <p>clear</p>
        </div>
    )
}

export default ClearButton;