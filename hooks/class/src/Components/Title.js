import React from 'react'

function Title() {
    console.log("titele is rendering ")
    return (
        <div>
            <p>this is usecall back example</p>

        </div>
    )
}

export default React.memo(Title)
