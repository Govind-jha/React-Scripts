import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.initialCount };
        console.log("Initialized content with count=" + this.state.count);
    }

    clickHandler() {
        this.setState({ count: ++this.state.count });
        console.log("All Must Die !!");
        console.log(this.props.t.value);
    }

    render() {
        return <button onClick={this.clickHandler.bind(this)} className="btn btn-info btn-sm">{this.state.count}</button>
    }
}