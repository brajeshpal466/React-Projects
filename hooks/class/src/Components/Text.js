import React from 'react'

function Text(props) {
    console.log(`this is text for ${props.children}`);
    return (
        <div>
            <p>{props.children} : {props.text}</p>
        </div>
    )
}

export default React.memo(Text)
