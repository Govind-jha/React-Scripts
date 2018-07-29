import React, { Component } from 'react';
import PostComponent from './post.component';

export default class PhotoComponent extends Component {

    render() {

        let code = this.props.params.code; // fetch the routeCode from the url.
        var index = this.props.myPosts.findIndex(post => post.code == code);
        
        // Returns the value where the function return true.
        let currPost = this.props.myPosts.find((post,i)=>{
            if(post.code == code){
                return true;
            }
        });
        
        return <div>
            <PostComponent post={currPost} i={index} key={currPost.id} {...this.props}/>
        </div>;
    }
}