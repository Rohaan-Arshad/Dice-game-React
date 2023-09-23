// props.jsx
import React from 'react';

const Props = (props) => {
    const { text } = props;
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default Props;
