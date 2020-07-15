import './App.css'
import './index.css'
import React from 'react'

import Card from './components/layout/Card'
import First from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Children from './components/basics/Children'
import Loop from './components/basics/Loop'
import Conditional from './components/basics/Conditional'
import ConditionalIf from './components/basics/ConditionalIf'
import Father from './components/communication/direct/Father'
import Super from './components/communication/indirect/Super'

export default (props) => (
    <div className="App">
        <Card title="#01 - First Component" color="#5A6A62">
            <First />
        </Card>
        <Card title="#02 - With Parameters" color="#00C8F8">
            <Parameter title="It is the title"
                subtitle="It is the subtitle" />
        </Card>
        <Card title="#03 - With Children" color="#1FDA9A">
            <Children>
                <ul>
                    <li>Anny</li>
                    <li>Jhon</li>
                    <li>Mark</li>
                    <li>Rita</li>
                </ul>
            </Children>
        </Card>
        <Card title="#04 - With Loop" color="#F2E394">
            <Loop />
        </Card>
        <Card title="#05 - With Conditional v1" color="#E94C6F">
            <Conditional number={10} />
        </Card>
        <Card title="#06 - With Conditional v2" color="#FA6900">
            <ConditionalIf number={11} />
        </Card>
        <Card title="#07 - Direct Communication" color="#354458">
            <Father secondName="Clinton" />
        </Card>
        <Card title="#08 - Indirect Communication" color="#9B539C">
            <Super />
        </Card>
    </div>
);