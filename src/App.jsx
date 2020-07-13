import './App.css'
import './index.css'
import React from 'react'

import Card from './components/layout/Card'
import First from './components/First'
import Parameter from './components/Parameter'
import Children from './components/Children'
import Loop from './components/Loop'
import Conditional from './components/Conditional'
import ConditionalIf from './components/ConditionalIf'

export default (props) => (
    <div className="App">
        <Card title="#01 - First Component">
            <First />
        </Card>
        <Card title="#02 - Component with Parameters">
            <Parameter title="It is the title"
                subtitle="It is the subtitle" />
        </Card>
        <Card title="#03 - Component with Children">
            <Children>
                <ul>
                    <li>Anny</li>
                    <li>Jhon</li>
                    <li>Mark</li>
                    <li>Rita</li>
                </ul>
            </Children>
        </Card>
        <Card title="#04 - Component with Loop">
            <Loop />
        </Card>
        <Card title="#05 - Component with Conditional v1">
            <Conditional number={10} />
        </Card>
        <Card title="#06 - Component with Conditional v2">
            <ConditionalIf number={11} />
        </Card>
    </div>
);