import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ButtonComponent from './button.component';

export default class ListOfButtonsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { data: this.props.data }
    }

    addButtonClickHandler() {
        let inputValue = ReactDOM.findDOMNode(this.refs.inputValue).value;
        this.setState({ data: [...this.state.data, inputValue] });
    }

    render() {

        return (
            <div>
                <input type="text" ref="inputValue" />
                <input type="button"
                    className="btn btn-success btn-sm"
                    onClick={this.addButtonClickHandler.bind(this)}
                    value="Add" />

                {this.state.data.map((btn, i) => <ButtonComponent t={this.refs.inputValue} initialCount={btn} key={i} />)}
            </div>
        );
    }

}