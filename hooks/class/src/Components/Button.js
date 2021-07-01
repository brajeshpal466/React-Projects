import React from 'react'

function Button({handler ,children}) {
    console.log(` button ${children} is rendering`);
    return (
        <div>
            <button onClick={handler}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
