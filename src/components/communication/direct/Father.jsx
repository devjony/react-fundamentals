import React from 'react'

import Child from './Child'

export default props =>
    <div>
        <Child { ...props }><strong>Jhon</strong></Child>
        <Child secondName={ props.secondName }><strong>Dan</strong></Child>
        <Child secondName="Stubart"><strong>Les</strong></Child>
    </div>