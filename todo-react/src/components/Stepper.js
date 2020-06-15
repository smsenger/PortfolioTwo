import React, { Component } from 'react'
import './Stepper.css';

export default class Stepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
    }
    
    onChange = (event) => {
        const newValue = event.target.value;
        this.setState({ inputValue: newValue });
    }

    onPlusClick = () => {
        this.setState({ 
            inputValue: (Number(this.state.inputValue)+1 )
    })
}


    onMinusClick = () => {
        this.setState({ 
            inputValue: Number(this.state.inputValue)-1 
        });
    }

    render() {
        return (
            <div>
                    <div><span>Completed Tasks</span></div>
                    <button onClick={this.onMinusClick}>-</button>
                <label htmlFor='input'>
                    <input type="number" value={this.state.inputValue} onChange={this.onChange} />
                </label>
                <button onClick={this.onPlusClick}>+</button>
            </div>
        )
    }
}