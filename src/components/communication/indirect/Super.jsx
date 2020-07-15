import React, { useState } from 'react'

import Sub from './Sub'

export default props => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState("Value")

    function afterClick(value, text) {
        setNum(value)
        setText(text)
    }

    return (
        <div>
            <h4>{ text }: { num }</h4>
            <Sub whenClick={ afterClick }>Dan</Sub>
        </div>
    )
}