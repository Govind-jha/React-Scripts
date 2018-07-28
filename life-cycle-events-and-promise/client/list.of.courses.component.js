import React, { Component } from 'react';

import CourseComponent from './course.component';

export default class ListOfCoursesComponent extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {
        var out = this.data.map((c, i) => <CourseComponent name={c} key={i} />);
        return <div>{out}</div>;
    }
}