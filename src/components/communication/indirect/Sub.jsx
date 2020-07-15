import React from 'react'

export default props => {

    function action() {
        props.whenClick((Math.random()  * 10).toFixed(2), "Gerado")
    }

    return (
        <div>
            <button onClick={ action }>Change</button>
        </div>
    )
}