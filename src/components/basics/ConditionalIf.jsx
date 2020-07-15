import React from 'react'
import If from './If'

export default props => {

    // props are read only!!
    // props.title = "New Title"
    return(
        <div>
            <h2>The number is { props.number }</h2>
            <If test={ props.number % 2 === 0 }>
                <span>Even</span>
            </If>
            <If test={ props.number % 2 !== 0 }>
                <span>Odd</span>
            </If>
        </div>
    )
}