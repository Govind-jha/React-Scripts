import React, { Component } from 'react';
import PostComponent from './post.component';

export default class AlbumComponent extends Component {

    render() {
        var posts = this.props.myPosts.map((post, i) => {
            return <PostComponent post={post} i={i} key={post.id} {...this.props} />
        });

        return <div>
            <div className="jumbotron">
                <h1>Album</h1>
            </div>
            {posts}
        </div>;
    }
}