import './Counter'
import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: this.props.count || 1,
        value: this.props.value || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.value += this.state.count
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.value -= this.state.count
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <div>
                    <label for="countInput">Count:</label>
                    <input id="countInput" type="number"
                        value={this.state.count}
                        onChange={e => this.setState({ count: +e.target.value })} />
                    <h4>Value: {this.state.value}</h4>
                </div>

                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>

            </div>
        )
    }
}