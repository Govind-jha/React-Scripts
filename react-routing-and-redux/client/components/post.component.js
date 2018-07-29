import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PostComponent extends Component {

    render() {
        return <div className="row cardComponent">
            <div className="col-sm-4">
                {/* This is an alternate to the anchor tag (<a></a>).
                  Provided by react, it prevents reloading of the page.*/}
                <Link to={`/photo/${this.props.post.code}`}>
                    <img src={this.props.post.display_src}
                        alt={this.props.post.caption} height={'120px'} width={'120px'} />
                </Link>
            </div>
            <div className="col-sm-8">
                <h5> {this.props.post.caption} </h5>
                {/* bind takes first param as context and there after you can pass extra params */}
                <button onClick={this.props.IncrementLikes.bind(null, this.props.i)} className="btn btn-primary">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    {this.props.post.likes}
                </button>
            </div >
        </div >


    };
}