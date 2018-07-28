import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log('1. Constructor was called !');
    }

    componentWillMount() {
        // For setting State
        console.log('2. component will mount');
        this.state = { name: 'IBM' };
        console.log(this.state);
    }

    componentDidMount() {
        // For access to DOM, after first rendering.
        console.log('3. component did mount !');
    }

    shouldComponentUpdate() {
        // when the SetState() is called, re render if return is true.
        console.log('4. should component update !');
        console.log("Arguments : " + JSON.stringify(arguments));

        return true;
    }

    componentWillUpdate() {
        console.log('5. will component update called !');
    }

    componentWillUnmount() {
        console.log('6. component will unmount !');
    }

    onChangeHandler(e) {
        this.setState({ name: e.target.value });
    }

    onClickHandler(){
        ReactDOM.unmountComponentAtNode(document.getElementById('content'));
    }

    render() {
        console.log('Rendering it !!');

        return (
            <div>
                <p> {this.state.name} </p>
                <input type="text" value={this.state.name} onChange={this.onChangeHandler.bind(this)} />
                <input type="button" value="Clear" className="btn btn-info btn-sm" onClick={this.onClickHandler.bind(this)} />
            </div>
        );
    }

}