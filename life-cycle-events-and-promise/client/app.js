// Code Here
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ListOfCoursesComponent from './list.of.courses.component';
import ListOfButtonsComponent from './list.of.buttons.component';
import LifeCycleComponent from './LifeCycleComponent';
import PostComponent from './post.component';

export class App extends Component {

    constructor(){
        super();
        this.courses = ["React", "Redux", "Node"];
    }

    render(){
        return (
            <div>
                <ListOfCoursesComponent data={this.courses} />
                <ListOfButtonsComponent data={[100,200,300,400]} />
                <LifeCycleComponent />
                <PostComponent />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#content'));