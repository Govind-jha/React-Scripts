import React, { Component } from 'react';
import axios from 'axios';

export default class PostComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount() {
        let promise = axios.get('https://jsonplaceholder.typicode.com/posts');
        promise.then(
            (res) => {
                this.setState({ posts: res.data });
            },
            (err) => {
                console.err('Failed to get data for Post Component');
            }
        );
    }

    render() {
        var postsToBeCreated = this.state.posts.map((post) => <li key={post.id}> {post.title} </li>);

        return <ul> {postsToBeCreated} </ul>;
    }
} 