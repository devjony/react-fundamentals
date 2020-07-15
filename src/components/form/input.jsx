import React, { useState } from 'react'

export default props => {

    const [name, setName] = useState('John')

    return (
        <>
            <h3>{ name }</h3>
            <input type="text" value={ name }
                onChange={ e => setName(e.target.value) } />
        </>
    )
}