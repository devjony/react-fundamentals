import React from 'react'

import Sub from './Sub'

export default props => {

    function afterClick(value, text) {
        console.log("Action!")
        console.log(value)
        console.log(text)
    }

    return (
        <div>
            <h4>Value</h4>
            <Sub whenClick={ afterClick }>Dan</Sub>
        </div>
    )
}