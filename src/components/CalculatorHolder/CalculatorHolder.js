import React from 'react';
import Input from '../Input/Input';
import ClearButton from '../ClearButton/ClearButton';
import Button from '../Button/Button';
import './CalculatorHolder.css';

let currentInput = []
let historyInput;
let result = 0;

class CalculatorHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            inputData: '0'
        };
        this.handleOperations = this.handleOperations.bind(this);
        this.handleEqualizer = this.handleEqualizer.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleOperations (event) {
        let p = event.target.closest('p');
        if (result != 0) {
            currentInput = [];
            currentInput.push(result);
            result = 0;
        }

        currentInput.push(p.innerHTML);
        historyInput = currentInput.join('');
        
        if (currentInput[0] == '0') {
            currentInput = [];
            historyInput = '0';
        }
        
        this.setState({
            inputData: historyInput
        });
    }
    handleEqualizer () {
        result = eval(historyInput);
        result = result.toFixed(2);
        this.setState({
           inputData: result
       })
    }
    handleClear () {
        currentInput = [];
        historyInput = '';
        result = 0;
        this.setState({
            inputData: '0'
        })
    }
  
    render () {
    return (
        <div className="calculator-holder">
            <Input data={this.state.inputData} handler={this.handleEqualizer}/>
            <div className="first-row">
                <ClearButton handler={this.handleClear}/>
                <Button symbol={'0'} classes={"button zero-button-borders calc-buttons"} handler={this.handleOperations}/>
                <Button symbol={'/'} classes={"button divide-button-borders calc-actions"} handler={this.handleOperations}/>
            </div>
            <div className="second-row">
                <Button symbol={'7'} classes={"button seven-button-borders calc-buttons"} handler={this.handleOperations}/>
                <Button symbol={'8'} classes={"button eight-button-borders calc-buttons"} handler={this.handleOperations}/>
                <Button symbol={'9'} classes={"button nine-button-borders calc-buttons"} handler={this.handleOperations}/>
                <Button symbol={'-'} classes={"button minus-button-borders calc-actions"} handler={this.handleOperations}/>
            </div>
            <div className="third-row">
                <Button symbol={'4'} classes={'button seven-button-borders calc-buttons'} handler={this.handleOperations}/>
                <Button symbol={'5'} classes={'button eight-button-borders calc-buttons'} handler={this.handleOperations}/>
                <Button symbol={'6'} classes={'button nine-button-borders calc-buttons'} handler={this.handleOperations}/>
                <Button symbol={'+'} classes={'button minus-button-borders calc-actions'} handler={this.handleOperations}/>
            </div>
            <div className="fourth-row">
                <Button symbol={'1'} classes={'button seven-button-borders calc-buttons'} handler={this.handleOperations}/>
                <Button symbol={'2'} classes={'button eight-button-borders calc-buttons'} handler={this.handleOperations}/>
                <Button symbol={'3'} classes={'button nine-button-borders calc-buttons'} handler={this.handleOperations}/>
                <Button symbol={'='} classes={'button minus-button-borders calc-actions'} handler={this.handleEqualizer}/>
            </div>
        </div>
    )
}
}

export default CalculatorHolder