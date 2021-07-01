import React from 'react'

function ColourSelector(props) {
    const { config, selectNextBackground } = props;
    const { background } = config.background;
    return (
        <div>
     <button className="button" onClick={() => selectNextBackground({background: background})}>button</button>  
    </div>
    )
}

export default ColourSelector;
