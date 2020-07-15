import React from 'react'

export default props => {

    function action() {
        props.whenClick(Math.random().toFixed(2), "End!")
    }

    return (
        <div>
            <button onClick={ action }>Change</button>
        </div>
    )
}