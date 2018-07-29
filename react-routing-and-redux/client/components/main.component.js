import React, { Component } from 'react';
import {fetchPostsData} from '../actions/actions'

// This is not a presentation component, it's a container component
export default class MainComponent extends Component {

    componentDidMount(){
        // Initialize the posts data, once the DOM is available
        this.props.fetchPostsData();
    }

    render() {
        return <div>
            {/*Populate childrens and pass props to it*/}
            {React.cloneElement(this.props.children, this.props)}
        </div>
    }
}